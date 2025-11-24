import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Races from './pages/Races';
import RaceDetails from './pages/RaceDetails';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/races" element={<Races />} />
          <Route path="/races/:meetingKey" element={<RaceDetails />} />
        </Routes>
      </div>
    </Router>
  );
}