import React, { useState } from 'react';
import ShowCount from './components/ShowCount/ShowCount.jsx'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador de Clicks</h1>
        <ShowCount count={count} />
        <div className="button-group">
          <button onClick={handleIncrement}>Incrementar</button>
          <button onClick={handleDecrement}>Decrementar</button>
        </div>
      </header>
    </div>
  );
}

export default App;