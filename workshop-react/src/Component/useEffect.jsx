import React, { useState, useEffect } from 'react';
 
function Counter() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    document.title = `Compteur : ${count}`;
  }, [count]);
 
  return (
    <div>
      <p>Vous avez cliqué {count} fois.</p>
      <button onClick={() => setCount(count + 1)}>Cliquez-moi</button>
    </div>
  );
}
 
export default Counter;