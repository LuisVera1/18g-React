import logo from './logo.svg';
import './App.css';
import Card from './components/Card/index'
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
    const [amount, setAmount] = useState(null);
  
    const handleChangeAmount = ({ target: { value } }) => {
      const newAmount = Number(value);
      setAmount(newAmount);
    };




  return (
    <div className="App">
      <header className="App-header">

      <div>
        <p className="title">
          La cantidad en USD es ${!amount ? "0.00" : (amount * 0.05).toFixed(2)}
        </p>
        <input type="number" value={amount} onChange={handleChangeAmount} />
      </div>



      </header>
    </div>
  );
}

export default App;
