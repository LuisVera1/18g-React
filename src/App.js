import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import FullName from './components/FullName';
import { useState } from 'react';
import React from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>

				<Title text="Hola"></Title>
				<Title text="Prueba2"></Title>

				<FullName firstName="Luis" lastName="Vera"></FullName>

				<p>Contador: {count}</p>
				<button onClick={ () => { setCount(count + 1); }}> Incrementar </button>
				<button onClick={ () => {	setCount(count - 1); }}> Decrementar </button>
			</header>
		</div>
	);
}

export default App;
