import React from 'react';

import { Footer, Experience, Techstack, Header } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Techstack />
      <Experience />
      <Footer />
    </div>
  )
}

export default App;
