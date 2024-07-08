import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Footer from './Pages/Footer';
import About from './Pages/About';
import Blog from './Pages/Blog'; 
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/" element={<Home />} /> 
          <Route path="contact" element={<Contact />} /> 

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
