import React from 'react';
import logo from './picture/Logo.jpeg';
import team from './picture/Team.jpg';
import first_rover_model from './picture/FirstRover.jpg';
import schematic from './picture/Inside.jpg';
import final_rover_model from './picture/Rover.jpg';
import first_hand_model from './picture/FirstHand.jpg';
import final_arm_model from './picture/FinalArm.jpg'

import './App.css';
import { useWebSocket } from './Connect'; 

function App() {
  const { temperature, humidity, ultrasonic, sendDirectionMessage, 
    startSendingDirectionMessage, stopSendingDirectionMessage} = useWebSocket();

  const handleButtonPress = (direction) => {
    startSendingDirectionMessage(direction);
  };

  const handleButtonRelease = () => {
    stopSendingDirectionMessage();
  };

  return (
    <div className="App">
      <header className="App-header">
      <p>The Strongest</p>
        <img src={logo} className="logo" alt="Logo" />
        <img src={team} className="team-photo" alt="Team" />
      </header>
      <div className="App-body">
        <div className="left-half">
          <p>First Rover Model</p>
          <img src={first_rover_model} className="img1" alt="First Rover Model" />
        </div>
        <div className="middle-line"></div>
        <div className="right-half">
          <p>First Movement</p>
          <video className="video1" controls>
            <source src="/video/firstRover.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
        <hr className="section-divider" />
        <div className="App-body">
          <div className="left-half">
          <p>First Arm Model</p>
          <img src={first_hand_model} className="img1" alt="First Arm Model" />
          </div>
          <div className="middle-line"></div>
          <div className="right-half">
            <p>Final Arm Model</p>
            <img src={final_arm_model} className="img1" alt="Final Arm Model" />
          </div>
        </div>
        <hr className="section-divider" />
        <div className="App-body">
          <div className="left-half">
            <p>The Rover</p>
            <img src={final_rover_model} className="img2"alt="Final rover" />
          </div>
          <div className="middle-line"></div>
          <div className="right-half">
            <p>The Schematic</p>
            <img src={schematic} className="img1" alt="The Schematic" />
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
      <div className="left-half">
        <iframe src="http://192.168.68.121/" className="white" height="275" width="375" />
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
          onClick={() => sendDirectionMessage('stop')}>Stop</button>
      </div>
      <div className="right-half">
          <video className="competition-video" controls>
        <source src="/video/Competition.mp4" type="video/mp4" />
        </video>
        </div>
      <div className="Project-summary">
        <h2>Project Summary</h2>
        <p>
          Our team worked on a rover project that integrates various technologies to achieve autonomous navigation and data collection.
          We built and tested the rover, developed the hand model, and created the schematic for the entire system. We also integrated an ESP32-CAM
          for live video streaming and gathered environmental data such as temperature, humidity, and distance using various sensors. The rover also
          has to be controlled by this website
        </p>      
      </div>  
    </div>
  );
}


export default App;
