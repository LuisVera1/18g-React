import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import FullName from './components/FullName';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
	const [state, setCount] = useState(0);
	const text = state === 0 ? "Off": "On";

	return (
		<div className="App">
			<header className="App-header">
				<Title text="Hola"></Title>
				<Title text="Prueba2"></Title>
				<FullName firstName="Luis" lastName="Vera"></FullName>

				<div className={"square " + text}>{text}</div>
				<button onClick={ () => { setCount(1) }}> Encender </button>
				<button onClick={ () => {	setCount(0) }}> Apagar </button>

			</header>
		</div>
	);
}

export default App;
