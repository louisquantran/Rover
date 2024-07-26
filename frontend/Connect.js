import io from 'socket.io-client';

const socket = io('http://localhost:8000');


  const [data, setData] = useState(null); 

  useEffect(() => {
    // Listen for temperature updates
    // When you receive a message with the topic 'example_topic' through the socket
    socket.on('example_topic', (data) => {
      setData(data);
    });

    

    return () => {
      socket.off('example_topic');
    };
  }, []);

  
  const exampleSend = (message) => {
    // send a message through the socket
    socket.emit('example_topic', message);
  };