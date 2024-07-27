import React from 'react';
import logo from './picture/Gojo-nah-id-win-Jujutsu-Kaisen.jpeg';
import team from './picture/Team.jpg';
import first_rover_model from './picture/IMG_0390.jpg';
import schematic from './picture/IMG_0391.jpg';
import first_hand_model from './picture/IMG_3586.jpg';
import './App.css';
import { useWebSocket } from './Connect';

function App() {
  const { temperature, humidity, ultrasonic, sendDirectionMessage } = useWebSocket();

  const handleButtonPress = (direction) => {
    sendDirectionMessage(direction);
  };

  const handleButtonRelease = () => {
    sendDirectionMessage('stop');
  };

  return (
    <div className="App">
      <header className="App-header">
      <p>The Strongest</p>
        <img src={logo} className="Logo" alt="Logo" />
        <img src={team} className="Team" alt="Team" />
      </header>
      <div className="App-body">
        <div className="left-half">
          <p>First rover model</p>
          <img src={first_rover_model} className="Testing" alt="First rover model" />
        </div>
        <div className="middle-line"></div>
        <div className="right-half">
          <p>First hand model</p>
          <img src={first_hand_model} className="Testing" alt="First schematic" />
        </div>
      </div>
      <hr className="section-divider" />
        <div className="App-body">
          <div className="left-half">
            <p>The Rover</p>
            <video controls>
              <source src="/video/firstRover.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="middle-line"></div>
          <div className="right-half">
            <p>The Schematic</p>
            <img src={schematic} className="Testing" alt="The Schematic" />
          </div>
        </div>
      <div className="App-data-body">
        <div className="column">
          <div className="Data-display">
            <p>Temperature: {temperature}°C</p>
          </div>
        </div>
        <div className="column">
          <div className="Data-display">
            <p>Humidity: {humidity}%</p>
          </div>
        </div>
        <div className="column">
          <div className="Data-display">
            <p>Distance: {ultrasonic} cm</p>
          </div>
        </div>
      </div>
      <div className="d-pad">
        <button 
          className="button left"
          onMouseDown={() => handleButtonPress('left')} 
          onMouseUp={handleButtonRelease}
          onMouseLeave={handleButtonRelease}
        >
          Left
        </button>
        <button 
          className="button right"
          onMouseDown={() => handleButtonPress('right')} 
          onMouseUp={handleButtonRelease}
          onMouseLeave={handleButtonRelease}
        >
          Right
        </button>
        <button 
          className="button up"
          onMouseDown={() => handleButtonPress('up')} 
          onMouseUp={handleButtonRelease}
          onMouseLeave={handleButtonRelease}
        >
          Up
        </button>
        <button 
          className="button down"
          onMouseDown={() => handleButtonPress('down')} 
          onMouseUp={handleButtonRelease}
          onMouseLeave={handleButtonRelease}
        >
          Down
        </button>
        <button 
          className="Stop-button"
          onClick={() => handleButtonPress('stop')}>Stop</button>
      </div>
    </div>
  );
}

export default App;
