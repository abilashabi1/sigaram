import React from 'react';
import { 
  Sticker, 
  Bike, 
  ShieldCheck, 
  CreditCard, 
  Crosshair, 
  Signpost, 
  Image as ImageIcon, 
  Megaphone
} from 'lucide-react';

const services = [
  {
    title: "Automobile Stickers",
    description: "Premium custom stickers for bikes, cars, vans, trucks, and buses.",
    icon: <Sticker className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Bike Modification",
    description: "Complete bike styling and modification services tailored to your taste.",
    icon: <Bike className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Sun Film & PPF",
    description: "High-quality sun control films and Paint Protection Films for all vehicles.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Number Plates",
    description: "All types of custom and standard number plates made to perfection.",
    icon: <CreditCard className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Laser & Acrylic Cutting",
    description: "Precision laser cutting and custom acrylic boards for diverse needs.",
    icon: <Crosshair className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Sign Boards",
    description: "Durable and attractive sign boards, including 3D and LED options.",
    icon: <Signpost className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Photo Frames",
    description: "Beautifully crafted photo frames available in all sizes and designs.",
    icon: <ImageIcon className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Flex & Lighting Boards",
    description: "Eye-catching flex banners and illuminated boards for your business.",
    icon: <Megaphone className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1582046830509-3286bbfb2649?w=800&auto=format&fit=crop&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl text-center mb-6">Our Expertise</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
          We provide a wide range of services from aesthetic vehicle modifications to professional signage solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-2xl overflow-hidden relative group hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-900/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              {/* Text Container */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Hover effect light streak */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-0"></div>
                
                <h3 className="text-xl mb-3 z-10 relative text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed z-10 relative flex-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
