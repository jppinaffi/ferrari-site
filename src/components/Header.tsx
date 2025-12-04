import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StaggeredMenu from './react-bits/mobile-menu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Races', ariaLabel: 'View races', link: '/races' },
    { label: 'Collections', ariaLabel: 'View collections', link: '/#collections' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/#about' }
  ];

  return (
    <>
      {/* Mobile Menu - Fullscreen overlay quando isFixed={true} */}
      <div className="md:hidden">
        <StaggeredMenu
          isFixed={false}
          logoUrl="/images/whitehorse.png"
          colors={['#1a1a1a', '#ff2800']}
          accentColor="#ff2800"
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          items={menuItems}
          displaySocials={false}
          displayItemNumbering={true}
          closeOnClickAway={true}
        />
      </div>

      {/* Desktop Header - Só aparece em telas >= md */}
      <header
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
          }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Ferrari Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center">
                <img
                  src="/images/whitehorse.png"
                  alt="logo-ferrari"
                  className="h-full"
                />
              </div>
              <span className="text-white tracking-wider">SCUDERIA FERRARI</span>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link to="/races" className="text-white hover:text-red-500 transition-colors">
                Races
              </Link>
              <a href="/#collections" className="text-white hover:text-red-500 transition-colors">
                Collections
              </a>
              <a href="/#about" className="text-white hover:text-red-500 transition-colors">
                About
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}