import React, { useEffect, useState } from 'react';
import HeroImage from '../../assets/About/Hero.jpg'; // Ensure the image path is correct

export default function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-50vh flex items-center justify-center text-white overflow-hidden pt-60 pb-40"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundAttachment: 'fixed',
        height: '50vh' // Explicitly setting height to half of viewport
      }}
    >
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-25"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/70 via-black/60 to-[#001F3F]/80"></div>
      
      {/* Parallax Effect on Content */}
      <div
        className="relative z-10 text-center px-6 transform transition-transform duration-300"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-3 uppercase relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-500">
            About Us
          </span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#001F3F] to-amber-500"></div>
        </h1>
        
        {/* Text with Glowing Effect */}
        <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
          We're a team of passionate technologists dedicated to helping businesses succeed through innovative technical solutions.
        </p>
        
        {/* Animated Button */}
        <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#001F3F] to-amber-500 text-white font-bold uppercase tracking-wide transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50">
          Learn More
        </button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-50vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}