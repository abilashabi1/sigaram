import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero.png';
import heroMobBg from '../assets/heromob.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-[70vh] md:min-h-screen flex items-center relative overflow-hidden pt-32 pb-16 md:pt-20 md:pb-0"
    >
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 z-[-1] hidden md:block"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Mobile Background */}
      <div 
        className="absolute inset-0 z-[-1] block md:hidden"
        style={{
          backgroundImage: `url(${heroMobBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Background overlay */}
      <div className="absolute inset-0 z-[0] bg-slate-900/70"></div>
      
      <div className="container-custom flex justify-center items-center relative z-10">
        <div className="flex flex-col gap-4 md:gap-6 animate-slide-up text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold pb-2 tracking-tight text-white drop-shadow-md">
            Premium <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
              Styling & Modifications
            </span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-medium drop-shadow-md max-w-2xl mx-auto">
            Your one-stop destination for automobile stickers, bike modifications, 
            sun films, PPF, customized number plates, and state-of-the-art sign boards.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <a href="#services" className="btn btn-primary">
              Explore Services <ArrowRight size={20} />
            </a>
            <a href="#location" className="btn btn-outline bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-sm">
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
