import React from 'react';
import HeroSection from '../components/CarSection';
import DriversSection from '../components/DriversSection';
import StatsSection from '../components/StatsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <DriversSection />
    </main>
  );
}
