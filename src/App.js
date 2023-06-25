import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import DestinationProfile from './components/DestinationProfile';
import MigrationJob from './components/MigrationJob';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<DestinationProfile />} />
        <Route path="/migrationjob" element={<MigrationJob />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

