from connections import connect_mqtt, connect_internet
from time import sleep
from constants import ssid, mqtt_server, mqtt_user, mqtt_pass
from dht import DHT11
from machine import Pin
from hcsr04 import HCSR04

# Initialize the sensor
temp_humid_sensor = DHT11(Pin(16, Pin.IN, Pin.PULL_UP))
ultra_sensor = HCSR04(trigger_pin=15, echo_pin=12, echo_timeout_us=10000)

client = connect_mqtt(mqtt_server, mqtt_user, mqtt_pass)

def cb(topic, message):
    if topic == b"read-something":
        print("print-something")

def main():
    try:
        # Connect to the internet and MQTT broker
        connect_internet(ssid, '1341292844')
        client.connect()
        
        # Set the callback for incoming messages
        client.set_callback(cb)
        
        # Subscribe to the read-temperature topic
        client.subscribe("read-something")
        
        while True:
            client.publish("read-something", "display-something")
            temp_humid_sensor.measure()
            temp = temp_humid_sensor.temperature()
            humid = temp_humid_sensor.humidity()
            
            client.publish("temperature", str(temp))
            client.publish("humidity", str(humid))
            print("Temperature published: ", temp)
            print("Humidity published: ", humid)
            
            distance = ultra_sensor.distance_cm()
            client.publish("ultrasonic", str(distance))
            print("Distance: ", distance)
            
            client.check_msg()
            sleep(1)  # Adjust sleep duration if needed

    except KeyboardInterrupt:
        print('Keyboard interrupt')

if __name__ == "__main__":
    main()

