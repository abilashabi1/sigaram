import React from 'react';
import { Sticker } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/90 pt-16 pb-8 border-t border-white/10 mt-16">
      <div className="container-custom flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2 text-3xl font-extrabold font-outfit text-white">
          <Sticker className="text-primary" size={36} />
          Sigaram<span className="text-primary">Stickers</span>
        </div>
        <p className="max-w-md text-slate-400">
          Elevating your vehicle's look and fulfilling all your signage and branding needs with unmatched quality.
        </p>
        <div className="mt-8 pt-8 border-t border-white/10 w-full text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sigaram Stickers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
