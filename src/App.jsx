import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';


function App() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', overflow: 'hidden' }}>
        <Hero />
        <Stats />
      </main>
    </>
  );
}

export default App;