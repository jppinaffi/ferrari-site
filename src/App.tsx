import Header from './components/Header';
import HeroSection from './components/CarSection';
import DriversSection from './components/DriversSection';
import StatsSection from './components/StatsSection';
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <DriversSection />
      </main>
    </div>
  );
}