import React from 'react';
import { Factory } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import mahatmaLogo from '../assets/client-logo/mahatma.png';
import auxiliumLogo from '../assets/client-logo/auxilium.jpg';
import sitLogo from '../assets/client-logo/sit.jpg';

const originalClients = [
  {
    name: "MAHATMA SCHOOL",
    logo: mahatmaLogo,
    type: "Education"
  },
  {
    name: "Auxilium College",
    logo: auxiliumLogo,
    type: "Education"
  },
  {
    name: "SIT College",
    logo: sitLogo,
    type: "Education"
  },
  {
    name: "VS Concrete Readymix",
    icon: <Factory className="w-12 h-12 mb-4 text-primary" />,
    type: "Industrial"
  }
];

// Duplicate clients to ensure Swiper loop works properly since we show up to 4 per view
const clients = [...originalClients, ...originalClients, ...originalClients];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-slate-100/50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl text-center mb-6 text-slate-900">Our Trusted Clients</h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
          We are proud to have delivered top-quality branding and signage solutions to some of the most respected institutions and businesses.
        </p>
        
        <div className="px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-4"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="glass-effect rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary/50 hover:bg-white transition-all duration-300 hover:-translate-y-1 h-full min-h-[250px]">
                  <div className="transform group-hover:scale-110 transition-transform duration-300 flex justify-center items-center h-20 mb-6">
                    {client.logo ? (
                      <img src={client.logo} alt={`${client.name} logo`} className="max-w-full max-h-full object-contain rounded-md" />
                    ) : (
                      client.icon
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">
                    {client.name}
                  </h3>
                  <span className="text-sm text-slate-500">{client.type}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
