// src/App.js
import React, { useState } from 'react';
import './App.css';
import DogBreedSearch from './components/DogBreedSearch';

function App() {
  const [color, setColor] = useState('#cccccc');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="App">
      <h1>Actividad 1: Cambia el color de la caja</h1>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
      ></div>
      <div className="button-container">
        <button onClick={() => changeColor('#ff4d4d')}>Rojo</button>
        <button onClick={() => changeColor('#4d4dff')}>Azul</button>
        <button onClick={() => changeColor('#4dff4d')}>Verde</button>
        <button onClick={() => changeColor('#cccccc')}>Reiniciar</button>
      </div>

      <hr />

      <h1>Actividad 2: Razas de perros aleatorios</h1>
      <DogBreedSearch />
    </div>
  );
}

export default App;