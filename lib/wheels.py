from machine import Pin
import time #importing time for delay

#OUT1  and OUT2
In1=Pin(6,Pin.OUT) 
In2=Pin(7,Pin.OUT)
EN_A1=Pin(8,Pin.OUT)

#OUT3  and OUT4
In3=Pin(4,Pin.OUT)
In4=Pin(3,Pin.OUT)
EN_B1=Pin(2,Pin.OUT)

EN_A1.high()
EN_B1.high()

#OUT5 and OUT6
In5=Pin(19,Pin.OUT)
In6=Pin(20, Pin.OUT)
EN_A2=Pin(18, Pin.OUT)

#OUT7 and OUT8
In7=Pin(21,Pin.OUT)
In8=Pin(22,Pin.OUT)
EN_B2=Pin(26,Pin.OUT)

EN_A2.high()
EN_B2.high()

#Forward
def move_forward():
    In1.high()
    In2.low()
    In3.high()
    In4.low()
    In5.high()
    In6.low()
    In7.high()
    In8.low()

#Backward
def move_backward():
    In1.low()
    In2.high()
    In3.low()
    In4.high()
    In5.low()
    In6.high()
    In7.low()
    In8.high()

#Turn Right
def turn_right():
    In1.low()
    In2.low()
    In3.low()
    In4.high()
    In5.low()
    In6.low()
    In7.low()
    In8.high()

#Turn Left
def turn_left():
    In1.low()
    In2.high()
    In3.low()
    In4.low()
    In5.low()
    In6.high()
    In7.low()
    In8.low()

#Stop
def stop():
    In1.low()
    In2.low()
    In3.low()
    In4.low()
    In5.low()
    In6.low()
    In7.low()
    In8.low()
