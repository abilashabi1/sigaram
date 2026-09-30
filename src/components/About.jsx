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
            
            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-lg text-primary shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-lg truncate">Premium</h4>
                  <p className="text-slate-500 text-xs sm:text-sm truncate">Quality</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-lg text-primary shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-lg truncate">Precision</h4>
                  <p className="text-slate-500 text-xs sm:text-sm truncate">Work</p>
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
