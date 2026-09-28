import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.15)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(30,41,59,0.5)_0%,transparent_50%)]"></div>
      
      <div className="container-custom flex justify-center items-center">
        <div className="flex flex-col gap-6 animate-slide-up text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent pb-2">
            Premium Styling & Modifications
          </h1>
          <p className="text-slate-400 text-lg md:text-xl">
            Your one-stop destination for automobile stickers, bike modifications, 
            sun films, PPF, customized number plates, and state-of-the-art sign boards.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <a href="#services" className="btn btn-primary">
              Explore Services <ArrowRight size={20} />
            </a>
            <a href="#location" className="btn btn-outline">
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
