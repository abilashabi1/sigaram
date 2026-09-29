import React, { useState, useEffect } from 'react';
import { Sticker } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-extrabold font-outfit text-slate-900">
          <Sticker className="text-primary" size={32} />
          Sigaram<span className="text-primary">Stickers</span>
        </a>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><a href="#home" className="text-slate-700 font-medium hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="text-slate-700 font-medium hover:text-primary transition-colors">About</a></li>
            <li><a href="#services" className="text-slate-700 font-medium hover:text-primary transition-colors">Services</a></li>
            <li><a href="#clients" className="text-slate-700 font-medium hover:text-primary transition-colors">Clients</a></li>
            <li><a href="#location" className="text-slate-700 font-medium hover:text-primary transition-colors">Location</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
