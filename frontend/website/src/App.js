import React from 'react';
import logo from './picture/Gojo-nah-id-win-Jujutsu-Kaisen.jpeg'
import team from './picture/Team.jpg';
import first_model from './picture/IMG_1795.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Strongest</p>
        <img src={logo} className="Logo" alt="Logo" /> 
        <img src={team} className="Team" alt="Team" /> 
      </header>
      <div className="App-body">
        <div className="left-half">
          <p>Initial Rover Model</p>
          <img src={first_model} className="Testing"/>
        </div>
        <div className="middle-line"></div>
        <div className="right-half">
          <p>Right Side Content</p>
          <img src={first_model} className="Testing"/>
        </div>
      </div>
    </div>
  );
}

export default App;
