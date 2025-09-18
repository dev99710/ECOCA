import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const EcoLogo: React.FC = () => (
  <div className="flex items-center space-x-2 group">
    <svg className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span className="font-bold text-2xl text-gray-800">EcoLeap</span>
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const id = targetId.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      // Calculate position, accounting for sticky header
      const headerOffset = 80; // Estimated height of the header in pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
    }

    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} aria-label="EcoLeap Home">
          <EcoLogo />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => handleScrollTo(e, `#${link.id}`)} className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium">
              {link.title}
            </a>
          ))}
          <a href="#cta" onClick={(e) => handleScrollTo(e, '#cta')} className="bg-green-600 text-white font-semibold px-5 py-2 rounded-full border-b-4 border-green-800 hover:bg-green-500 hover:border-green-700 transform hover:-translate-y-0.5 active:translate-y-0.5 active:border-b-2 transition-all duration-150 ease-in-out">
            Request a Demo
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen} className="text-gray-800 focus:outline-none z-50 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
          <div className={`absolute top-0 right-0 h-full bg-white shadow-xl w-64 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="px-6 pt-20 pb-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => handleScrollTo(e, `#${link.id}`)} className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium py-2 text-lg">
                  {link.title}
                </a>
              ))}
              <a href="#cta" onClick={(e) => handleScrollTo(e, '#cta')} className="bg-green-600 text-white text-center px-5 py-3 mt-4 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md font-semibold border-b-4 border-green-800 active:border-b-0">
                Request a Demo
              </a>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;