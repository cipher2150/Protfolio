import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';



function App() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', overflow: 'hidden' }}>
        <Hero />
        <Stats />
        <About />
      </main>
    </>
  );
}

export default App;