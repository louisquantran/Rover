import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io('http://localhost:8006');

export const useWebSocket = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [ultrasonic, setUltrasonic] = useState(null);

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

    return () => {
      socket.off('temperature');
      socket.off('humidity');
      socket.off('ultrasonic');
    };
  }, []);

  const sendRecordTemperatureMessage = () => {
    console.log('Record Temperature button pressed');
    socket.emit('read-temperature');
  };

  const sendHumidityMessage = () => {
    console.log('Record humidify button pressed');
    socket.emit('read-humidity');
  };

  return { temperature, sendRecordTemperatureMessage, humidity, sendHumidityMessage, ultrasonic, setUltrasonic };
};
