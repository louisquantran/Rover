from machine import Pin
import time #importing time for delay

#OUT1  and OUT2
In1=Pin(10,Pin.OUT) 
In2=Pin(11,Pin.OUT)

#OUT3  and OUT4
In3=Pin(12,Pin.OUT)
In4=Pin(13,Pin.OUT)

#Forward
def move_forward():
    In1.high()
    In2.low()
    In3.high()
    In4.low()

#Backward
def move_backward():
    In1.low()
    In2.high()
    In3.low()
    In4.high()

#Turn Right
def turn_right():
    In1.low()
    In2.low()
    In3.low()
    In4.high()

#Turn Left
def turn_left():
    In1.low()
    In2.high()
    In3.low()
    In4.low()
    
#Stop
def stop():
    In1.low()
    In2.low()
    In3.low()
    In4.low()