import React from 'react';
import './App.css';
import Index from './components/index.js';
import Rules from './components/rules.js';

function App() {
  return (
    <div className="App">
      <h2>
      Cellular Automata and Conway's 
      </h2>
      <Index/>
      <Rules/>
    </div>
  );
}

export default App;
