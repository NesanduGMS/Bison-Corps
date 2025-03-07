import React from 'react';

export default function Hero() {
  return (
    <section className="py-12 bg-blue-50 text-black">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Creative heading with accent */}
        <div className="text-center mb-10 relative animate-fade-in">
          <h2 className="text-4xl font-bold inline-block relative">
            <span className="relative z-10">Our Location</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Visit us at our office in Moratuwa, Sri Lanka
          </p>
        </div>
        
        {/* Map container with decorative elements */}
        <div className="relative mx-auto max-w-5xl mb-8 animate-slide-up">
          {/* Decorative elements with animation */}
          <div className="absolute -top-6 -left-6 w-20 h-20 border-l-4 border-t-4 border-amber-500 z-10 animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 border-r-4 border-b-4 border-amber-500 z-10 animate-pulse"></div>
          
          {/* Map shadow and glow effects */}
          <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-300 group transition-all duration-500 hover:shadow-xl">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            {/* The actual map - reduced height */}
            <div className="w-full h-80 bg-gray-100 relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.831446847199!2d79.89604257448205!3d6.790354620005814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2456b1a24d707%3A0xdace1933b0030eb7!2sDegasaw%20Mawatha%2C%20Moratuwa%2010400!5e0!3m2!1sen!2slk!4v1741336397106!5m2!1sen!2slk" 
                className="w-full h-full"
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          {/* Location details card with animation */}
          <div className="absolute -bottom-12 right-8 bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-80 transform transition-all duration-500 hover:translate-y-2 animate-fade-in">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span className="w-2 h-6 bg-amber-500 mr-3"></span>
              Visit Our Office
            </h3>
            <p className="text-gray-600 mb-3">
              Degasaw Mawatha, Moratuwa 10400, Sri Lanka
            </p>
            <a 
              href="https://maps.app.goo.gl/8XjoUaoYkpzcZtF68" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-amber-500 hover:text-black text-white px-4 py-2 rounded transition-colors duration-300 text-sm font-medium"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </section>
  );
}