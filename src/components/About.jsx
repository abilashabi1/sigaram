import React from 'react';
import { Award, Target, Users } from 'lucide-react';
import ceoImage from '../assets/About/ceo.png';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl mb-6 text-slate-900 font-bold">About Sigaram Stickers</h2>
            <h3 className="text-xl md:text-2xl text-primary font-semibold mb-6">Founded by Prakash</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              With a passion for creativity and precision, Prakash established Sigaram Stickers to bring high-quality vehicle modification and custom signage to our community. What started as a small venture has grown into a trusted destination for premium automobile styling.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Under Prakash's leadership, our team is dedicated to delivering excellence in every project, whether it's a simple name board or a complete vehicle transformation. We believe in using only the best materials and latest technologies to ensure long-lasting results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-orange-100 p-3 rounded-lg text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Premium</h4>
                  <p className="text-slate-500 text-sm">Quality</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-orange-100 p-3 rounded-lg text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Precision</h4>
                  <p className="text-slate-500 text-sm">Work</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative flex justify-center">
            <div className="glass-effect p-3 rounded-3xl relative z-10 max-w-[340px] w-full">
              <img 
                src={ceoImage} 
                alt="Prakash - Founder of Sigaram Stickers" 
                className="w-full h-auto rounded-2xl shadow-sm"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-2 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-4 left-1/4 w-40 h-40 bg-orange-400/20 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
