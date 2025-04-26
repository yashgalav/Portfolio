import React from 'react';
// import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Service from './components/Service';
import Contact from './components/Contact';
// import Layout from './components/Layout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useRecoilState } from 'recoil';
import { darkAtom } from './store/atoms/DarkAtom';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useRecoilState(darkAtom);

  return (
    <Router>
      {/* <Layout> */}
        
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-slate-100 text-black '}`}>
        <Navbar  />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Service />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        </div>
      {/* </Layout> */}
    </Router>
  );
}
export default App;












