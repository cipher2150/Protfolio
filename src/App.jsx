import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', overflow: 'hidden' }}>
        <Hero />
      </main>
    </>
  );
}

export default App;