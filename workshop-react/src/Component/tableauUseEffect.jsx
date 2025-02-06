import React, { useState, useEffect } from 'react';
 
function Timer() {
  const [seconds, setSeconds] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
 
    return () => clearInterval(interval);
  }, []); // [] signifie que l'effet s'exécute une seule fois (au montage)
 
  return <p>Temps écoulé : {seconds} secondes.</p>;
}
 
export default Timer;
 