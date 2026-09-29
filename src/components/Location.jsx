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
                  href="https://maps.app.goo.gl/RckmEGWpVVXJxxvy9?g_st=aw" 
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
                <a 
                  href="tel:+919944663592" 
                  className="text-[18px] text-slate-900 font-semibold mb-1 block hover:text-primary transition-colors"
                >
                  +91 9944663592
                </a>
                <p className="text-slate-600 mb-3">Reach out to us for any inquiries.</p>
                <a 
                  href="https://wa.me/919944663592" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.337a9.994 9.994 0 0 0 4.779 1.216h.004c5.505 0 9.986-4.48 9.989-9.985.003-2.67-.991-5.184-2.88-7.075C17.236 2.926 14.698 2 12.012 2zM12.012 20.264h-.003a8.356 8.356 0 0 1-4.246-1.152l-.305-.18-3.147.804.839-3.048-.198-.314a8.312 8.312 0 0 1-1.272-4.407c.002-4.606 3.75-8.35 8.354-8.35 2.235 0 4.332.87 5.91 2.451a8.32 8.32 0 0 1 2.446 5.894c-.003 4.603-3.754 8.302-8.378 8.302zm4.62-6.282c-.253-.127-1.496-.739-1.728-.823-.231-.084-.4-.127-.569.127-.168.254-.65 1.823-.797.992-.148.169-.296.19-.55.064a6.837 6.837 0 0 1-2.008-1.238 7.55 7.55 0 0 1-1.39-1.737c-.147-.253-.016-.39.111-.516.115-.115.253-.295.38-.443.127-.148.169-.254.253-.423.084-.169.042-.317-.021-.443-.063-.127-.569-1.371-.778-1.878-.203-.493-.41-.426-.569-.434-.148-.008-.317-.01-.486-.01-.169 0-.443.063-.675.317-.231.254-.885.866-.885 2.112 0 1.246.907 2.45 1.033 2.619.127.169 1.785 2.723 4.325 3.818 2.54 1.094 2.54.729 3.003.687.463-.042 1.496-.612 1.707-1.203.211-.591.211-1.098.148-1.203-.063-.106-.231-.17-.485-.296z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1 shrink-0" />
              <div>
                <strong className="block text-slate-900 mb-1">Working Hours</strong>
                <p className="text-slate-600">9:00 AM to 9:00 PM</p>
                <p className="text-primary text-sm mt-0.5 font-medium">Sunday: Holiday</p>
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
