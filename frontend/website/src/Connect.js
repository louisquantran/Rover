import io from 'socket.io-client';
import { useEffect, useState, useRef } from 'react';

const socket = io('http://localhost:8006');

export const useWebSocket = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [ultrasonic, setUltrasonic] = useState(null);
  const [direction, setDirection] = useState(null);
  const intervalIdRef = useRef(null);
  const isSendingRef = useRef(false);

  useEffect(() => {
    // Listen for temperature updates
    socket.on('temperature', (data) => {
      setTemperature(data);
    });

    // Listen for humidity updates
    socket.on('humidity', (data) => {
      setHumidity(data);
    });

    socket.on('ultrasonic', (data) => {
      setUltrasonic(data);
    });

    socket.on("direction", (msg) => {
      setDirection(msg);
    });

    return () => {
      socket.off('temperature');
      socket.off('humidity');
      socket.off('ultrasonic');
      socket.off('direction');
    };
  }, []);

  const sendDirectionMessage = (direction) => {
    console.log(`Sending direction command: ${direction}`);
    
    // Send the direction command to the server
    if (direction === "left") {
      socket.emit('send-direction', "left");
    } else if (direction === "right") {
      socket.emit('send-direction', "right");
    } else if (direction === "up") {
      socket.emit('send-direction', "up");
    } else if (direction === "down") {
      socket.emit('send-direction', "down");
    } else {
      console.error('send-direction', "stop");
    }
  };

  const startSendingDirectionMessage = (direction) => {
    if (isSendingRef.current) return; // Prevent multiple intervals

    isSendingRef.current = true;
    sendDirectionMessage(direction);

    intervalIdRef.current = setInterval(() => {
      sendDirectionMessage(direction);
    }, 1000); // Fixed interval duration of 200ms
  };

  const stopSendingDirectionMessage = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    isSendingRef.current = false;
  };

  return { temperature, humidity, ultrasonic, direction, sendDirectionMessage, stopSendingDirectionMessage, startSendingDirectionMessage };
};
