import React, {useState} from "react";

//components Compteur
const Compteur = ({increment, name, onReset}) => {
    //Etat compteur local
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    //Fonction start counter
    const startCounter = () => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount + increment >= 20) {
                    clearInterval(interval);
                    return 20;
                }
                return prevCount + increment;
            });
        }, 1000);
        setIntervalId(interval);
    };

    // Fonction pour arrêter le compteur
  const stopCounter = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  // Fonction pour réinitialiser le compteur
  const resetCounter = () => {
    setCount(0);
    clearInterval(intervalId);
    setIntervalId(null);
    onReset(); // Si on veut notifier le parent
  };

  return (
    <div className="compteur">
      <h2>{name} - Compteur: {count}</h2>
      <button onClick={startCounter} disabled={intervalId || count >= 20}>
        Start
      </button>
      <button onClick={stopCounter} disabled={!intervalId || count >= 20}>
        Stop
      </button>
      <button onClick={resetCounter} disabled={count === 0}>
        Reset
      </button>
    </div>
  );
};

export default Compteur;