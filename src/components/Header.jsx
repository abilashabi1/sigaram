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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm' : 'bg-gradient-to-b from-slate-900/80 to-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className={`flex items-center gap-2 text-2xl font-extrabold font-outfit ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          <Sticker className="text-primary" size={32} />
          Sigaram<span className="text-primary">Stickers</span>
        </a>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {['Home', 'About', 'Services', 'Clients', 'Location'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`font-medium transition-colors ${scrolled ? 'text-slate-700 hover:text-primary' : 'text-slate-200 hover:text-white'}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
