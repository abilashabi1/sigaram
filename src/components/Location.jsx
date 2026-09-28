import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl text-center mb-16 text-slate-900">Visit Our Shop</h2>
        <div className="glass-effect rounded-[24px] p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl mb-2 text-slate-900 font-semibold">Sigaram Stickers</h3>
              <p className="text-slate-600">Come visit us for the best modification and branding solutions in town.</p>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 shrink-0" />
              <div>
                <strong className="block text-slate-900 mb-1">Location</strong>
                <p className="text-slate-600 mb-4">View on Google Maps for precise directions.</p>
                <a 
                  href="https://maps.app.goo.gl/XdskUhYSdSn6whKV7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm inline-flex"
                >
                  Open Google Maps
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 shrink-0" />
              <div>
                <strong className="block text-slate-900 mb-1">Contact</strong>
                <h1 className="text-[18px] text-slate-900 font-semibold mb-1">+91 9944663592</h1>
                <p className="text-slate-600">Reach out to us for any inquiries.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1 shrink-0" />
              <div>
                <strong className="block text-slate-900 mb-1">Working Hours</strong>
                <p className="text-slate-600">Open all days</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden h-[400px] border border-slate-200 w-full shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.55182962382!2d79.8055456!3d11.0657921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a552599426f8eb7%3A0x6e8e88863f6a27e8!2sSigaram%20Stickers!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin" 
              className="w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sigaram Stickers Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
