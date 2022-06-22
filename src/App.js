import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';

export default function App() {
  const [mxn, setMXN] = useState(null);
  const [usd, setUSD] = useState(null);

  const handleChangeAmount = ({ target: { value } },currency) => {
    if(currency === "mxn"){
      setMXN(value)
      setUSD((mxn * 0.05).toFixed(2))
    } else{
      setUSD(value)
      setMXN((usd * 20.13).toFixed(2))
    }
  };

  return (
    <div className="App">
      <p>MXN</p>
      <input type="number" 
        value={mxn}
        onChange={(e)=>handleChangeAmount(e,"mxn")} />
      <p>USD</p>
      <input type="number"
        value={usd}
        onChange={(e) =>handleChangeAmount(e,"usd")} />
    </div>
  );
}