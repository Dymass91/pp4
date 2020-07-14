import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './layoouts/Header';
import Page from './layoouts/Page';
import Navigation from './layoouts/Navigation';
import Footer from './layoouts/Footer';
import './styles/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          {<Header />}
        </header>
        <main>
          <aside>
            {<Navigation />}
          </aside>
          <section className="Page">
            {<Page />}
          </section>
        </main>
        <footer>
          {<Footer />}
        </footer>
      </div>
    </Router >
  );
}

export default App;
