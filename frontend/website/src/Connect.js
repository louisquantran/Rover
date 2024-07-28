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


    socket.on('temperature', (data) => setTemperature(data));
    socket.on('humidity', (data) => setHumidity(data));
    socket.on('ultrasonic', (data) => setUltrasonic(data));
    socket.on('direction', (msg) => setDirection(msg));

    return () => {
      socket.off('temperature');
      socket.off('humidity');
      socket.off('ultrasonic');
      socket.off('direction');
    };
  }, []);

  const sendDirectionMessage = (direction) => {
    console.log(`Sending direction command: ${direction}`);
    socket.emit('send-direction', direction);
  };

  const startSendingDirectionMessage = (direction) => {
    if (isSendingRef.current) return; // Prevent multiple intervals

    isSendingRef.current = true; // Set the flag to true
    sendDirectionMessage(direction); // Send the initial message immediately

    intervalIdRef.current = setInterval(() => {
      sendDirectionMessage(direction);
    }, 30000); // Interval duration in milliseconds
  };

  const stopSendingDirectionMessage = () => {
      clearInterval(intervalIdRef.current); // Clear the interval
      sendDirectionMessage('stop'); // Send stop command immediately
      intervalIdRef.current = null;
      isSendingRef.current = false; // Reset the flag
  };

  return { temperature, humidity, ultrasonic, direction, sendDirectionMessage, stopSendingDirectionMessage, startSendingDirectionMessage };
};
