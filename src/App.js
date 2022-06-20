import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import FullName from './components/FullName';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
	const [stateP, setItem] = useState(null);
	const [state, setIsOn] = useState(0);
	const text = state === 0 ? "Off": "On";

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

	const kodersUI = koders.map((koder, index) => (
    <li className='listStyle' key={index}>
			<div className='flexcontainer'>
				<div className='img'><img className='imgThumb' src={koder.photoURL} alt=""></img></div>
				<div className='textContainer'>
					<p className='textBlack'>{koder.firstName + " " + koder.lastName}</p>
					<p className='textGray'>{"Edad: " + koder.age + ", Género: " + koder.gender}</p>
				</div>
			</div>
		</li>
  ));


	return (
		<div className="App">
			<header className="App-header">

				<ul className='list'>{kodersUI}</ul>

			</header>
		</div>
	);
}

export default App;
