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

// Composant principal
const App = () => {
  // États pour les compteurs
  const [count1, setCount1] = useState(0);
  

  // États pour les intervalles
  const [interval1, setInterval1] = useState(null);
  
  // Fonction pour démarrer le compteur 1
  const startCounter1 = () => {
    const interval = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount + 1 >= 20) {
          clearInterval(interval);
          return 20;
        }
        return prevCount + 1;
      });
    }, 1000);
    setInterval1(interval);
  };

  

  // Fonction pour arrêter le compteur 1
  const stopCounter1 = () => {
    clearInterval(interval1);
    setInterval1(null);
  };

  

  // Fonction pour réinitialiser le compteur 1
  const resetCounter1 = () => {
    setCount1(0);
    if (interval1 !== null) {
      clearInterval(interval1);
      setInterval1(null);
    }
  };

  

  return (
    <div>
      <Compteur
        name="Compteur 1"
        count={count1}
        isRunning={interval1 !== null}
        onStart={startCounter1}
        onStop={stopCounter1}
        onReset={resetCounter1}
      />
    </div>
  );
};

export default App;
