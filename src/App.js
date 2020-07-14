import React from 'react';
import logo from './logo.svg';

// import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './layoouts/Navigation';
import Footer from './layoouts/Footer';
import './App.css';

function App() {
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
          Learn React 22
        </a>
      </header>
      <aside>
        {<Navigation />}
      </aside>
      <footer>
        {<Footer />}
      </footer>
    </div>
  );
}

export default App;
