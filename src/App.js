import React from "react";
import GuitarFretboard from "./components/GuitarFretboard";
import About from "./components/About";
import Tabs from "./components/Tabs"; 
import ChordButtons from "./components/ChordButtons";
import MelodyPlayer from "./components/MelodyPlayer";
import "./App.css";
import logo from "./assets/logo.png"; 

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
          <a href="#guit" className="logo-text">Guitar Simulator</a>
        </div>
        <nav className="nav">
          <a href="#about">About the project</a>
          <a href="#tabs-section">TABs</a>
        </nav>
      </header>
      <GuitarFretboard />
      <ChordButtons />
      <MelodyPlayer />
      <About />
      <Tabs />
    </div>
  );
}

export default App;
