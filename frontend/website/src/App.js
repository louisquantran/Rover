import React from 'react';
import logo from './picture/Gojo-nah-id-win-Jujutsu-Kaisen.jpeg'
import team from './picture/Team_Photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Strongest</p>
        <img src={logo} className="Logo" /> 
        <img src={team} className="Team" /> 
      </header>
    </div>
  );
}

export default App;
