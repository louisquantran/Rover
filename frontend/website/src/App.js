// src/App.js
import React from 'react';
import logo from './picture/Gojo-nah-id-win-Jujutsu-Kaisen.jpeg';
import team from './picture/Team.jpg';
import first_model from './picture/IMG_0390.jpg';
import first_schematic from './picture/IMG_0391.jpg';
import './App.css';
import { useWebSocket } from './Connect';

function App() {
  const { temperature } = useWebSocket();
  const { humidity } = useWebSocket();
  const { ultrasonic } = useWebSocket();


  return (
    <div className="App">
      <header className="App-header">
        <p>The Strongest</p>
        <img src={logo} className="Logo" alt="Logo" />
        <img src={team} className="Team" alt="Team" />
      </header>
      <div className="App-body">
        <div className="left-half">
          <p>Initial rover model</p>
          <img src={first_model} className="Testing" alt="Initial rover model" />
        </div>
        <div className="middle-line"></div>
          <div className="right-half">
            <p>First schematic</p>
            <img src={first_schematic} className="Testing" alt="First schematic" />
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
    </div>
  );
}


export default App;
