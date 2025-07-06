import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolios from './components/Portfolios';
import Team from './components/Team';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Portfolios />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;