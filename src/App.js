import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./pages/About/index"

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Estoy en el dashboard</p>}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </div>
  );
}
