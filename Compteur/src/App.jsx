// App.js
import React, { useState } from 'react';
import './App.css';
import Compteur from './compteur';

const App = () => {
  const [resetCount1, setResetCount1] = useState(0);
  const [resetCount2, setResetCount2] = useState(0);

  // Fonction pour réinitialiser les compteurs dans le parent (facultatif si nécessaire)
  const handleResetCounter1 = () => {
    setResetCount1(resetCount1 + 1);
  };

  const handleResetCounter2 = () => {
    setResetCount2(resetCount2 + 1);
  };

  return (
    <div className="app">
      <Compteur
        name="Compteur 1"
        increment={1}
        onReset={handleResetCounter1}
      />
      <Compteur
        name="Compteur 2"
        increment={2}
        onReset={handleResetCounter2}
      />
    </div>
  );
};

export default App;
