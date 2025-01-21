import React, { useState } from 'react';
import './App.css';

// Composant Compteur
const Compteur = ({ increment, count, isRunning, onStart, onStop, onReset, name }) => {
  return (
    <div>
      <h2>{name} - Compteur: {count}</h2>
      <button onClick={onStart} disabled={isRunning || count >= 20}>
        Start
      </button>
      <button onClick={onStop} disabled={!isRunning || count >= 20}>
        Stop
      </button>
      <button onClick={onReset} disabled={count === 0}>
        Reset
      </button>
    </div>
  );
};


