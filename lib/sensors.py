from connections import connect_mqtt, connect_internet
from time import sleep
from constants import ssid, mqtt_server, mqtt_user, mqtt_pass
from hcsr04 import HCSR04
from machine import Pin
from dht import DHT11

# Initialize the sensor
ultra_sensor = HCSR04(trigger_pin=15, echo_pin=12, echo_timeout_us=10000)
temp_humid_sensor = DHT11(Pin(16, Pin.IN, Pin.PULL_UP))

def cb(topic, sensor):
    # Handle incoming messages if needed
    if topic == b"ultrasonic":
        print("Distance: ", sensor.decode())
    elif topic == b"temperature":
        print("The temperature: ", sensor.decode())
    elif topic == b"humidity":
        print("The humidity: ", sensor.decode())

def main():
    try:
        # Connect to the internet and MQTT broker
        connect_internet(ssid, '1341292844')
        client = connect_mqtt(mqtt_server, mqtt_user, mqtt_pass)
        
        # Set the callback for incoming messages
        client.set_callback(cb)
        
        # Subscribe to topics
        client.subscribe("ultrasonic")
        client.subscribe("temperature")
        client.subscribe("humidity")
        
        while True:
            temp_humid_sensor.measure()
            temp = temp_humid_sensor.temperature()
            humid = temp_humid_sensor.humidity()
            client.publish("temperature", str(temp))
            client.publish("humidity", str(humid))
            
            distance = ultra_sensor.distance_cm()
            client.publish("ultrasonic", str(distance))
            client.check_msg()
            
            sleep(5)

    except KeyboardInterrupt:
        print('Keyboard interrupt')


if __name__ == "__main__":
    main()


