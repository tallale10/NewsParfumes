// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Find from './components/find/Find';
import Driver from './components/driver/Driver';
import Luxury from './components/luxury/Luxury';
import Footer from './components/footer/Footer';




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/Find" element={<Find />} />
          <Route path="/Driver" element={<Driver />} />
          <Route path="/Luxury" element={<Luxury />} />
        </Routes>
        <br></br><br></br>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
