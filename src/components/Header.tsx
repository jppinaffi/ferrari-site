import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Ferrari Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8  rounded-sm flex items-center justify-center">
              <img src="../../images/whitehorse.png" alt="logo-ferrari" className="h-full" />
            </div>
            <span className="text-white tracking-wider">SCUDERIA FERRARI</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-red-500 transition-colors">Home</Link>
            <Link to="/races" className="text-white hover:text-red-500 transition-colors">Races</Link>
            <a href="/#collections" className="text-white hover:text-red-500 transition-colors">Collections</a>
            <a href="/#about" className="text-white hover:text-red-500 transition-colors">About</a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}