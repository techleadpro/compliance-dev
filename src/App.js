import React from 'react'
import './App.css'
import LoginSignup from './components/LoginSignup/LoginSignup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/LoginSignup/Navbar/Navbar';
import Home from '../src/components/LoginSignup/pages/Home';
import About from '../src/components/LoginSignup/pages/AboutUS';
import Product from '../src/components/LoginSignup/pages/Product';
import Solutions from '../src/components/LoginSignup/pages/Solution';
import Contact from '../src/components/LoginSignup/pages/ContactUs';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginSignUp" element={<LoginSignup />} />
        <Route path="/login" element={<LoginSignup />} /> 
      </Routes>
    </Router>
  );
}

export default App;

