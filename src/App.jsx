import React from 'react';
import NavBar from './components/NavBar';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';

function App() {
  return (
    <div className='bg-gray-950 min-h-screen'>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home/>}/>
          <Route path="map" element={<Map/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
     </div>
  )
}

export default App
