import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import FullName from './components/FullName';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
	const [stateP, setItem] = useState(0);
	const [state, setIsOn] = useState(0);
	const text = state === 0 ? "Off": "On";



	return (
		<div className="App">
			<header className="App-header">

				<div onMouseOver={(()=>{
					setIsOn(1)
				})} 
				onMouseLeave={(()=>{
					setIsOn(0)
				})}
				className={"square " + text}>{text}</div>

				<p className={stateP === 0? "selected": ""} onMouseOver={()=>setItem(0)}>Getting Started</p>
				<p className={stateP === 1? "selected": ""} onMouseOver={()=>setItem(1)}>Add React to a Website</p>
				<p className={stateP === 2? "selected": ""} onMouseOver={()=>setItem(2)}>Create a New React App</p>
				<p className={stateP === 3? "selected": ""} onMouseOver={()=>setItem(3)}>CDN Links</p>
				<p className={stateP === 4? "selected": ""} onMouseOver={()=>setItem(4)}>Release Channels</p>



			</header>
		</div>
	);
}

export default App;
