import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';

function App() {
  return (
    <div className='bg-slate-100 min-h-screen'>
     <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="map" element={<Map/>} />
      </Routes>
     </BrowserRouter>
      <Footer />
     </div>
  )
}

export default App
