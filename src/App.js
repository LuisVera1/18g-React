import logo from './logo.svg';
import './App.css';
import Card from './components/Card/index'
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
	const [stateP, setItem] = useState(null);
	const [state, setIsOn] = useState(0);

	const koders = [
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      firstName: "Nestor",
      lastName: "Ramírez",
      age: 40,
      gender: "m",
      photoURL: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      firstName: "David",
      lastName: "Romero",
      age: 28,
      gender: "m",
      photoURL: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "m",
      photoURL: "https://www.w3schools.com/w3images/avatar2.png",
    },
  ];

  const kodersUIC = koders.map(
    ({ firstName, lastName, age, gender, photoURL }, index) => (
      <Card
        key={index}
        photoURL={photoURL}
        firstName={firstName}
        lastName={lastName}
        age={age}
        gender={gender}
      />
    )
  );

  return (
    <div className="App">
      <header className="App-header">
        <ul className="list">{kodersUIC}</ul>
      </header>
    </div>
  );
}

export default App;
