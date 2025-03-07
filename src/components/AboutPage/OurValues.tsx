import React, { useEffect, useState, useRef } from 'react';
import { Award, Clock, Target, TrendingUp } from 'lucide-react';

export default function CoreValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const values = [
    { 
      icon: <Target size={28} />, 
      title: "Excellence", 
      description: "We strive for excellence in everything we do, from code quality to client communication." 
    },
    { 
      icon: <TrendingUp size={28} />, 
      title: "Innovation", 
      description: "We embrace new technologies and approaches to solve complex problems creatively." 
    },
    { 
      icon: <Award size={28} />, 
      title: "Integrity", 
      description: "We operate with honesty, transparency, and ethical standards in all our interactions." 
    },
    { 
      icon: <Clock size={28} />, 
      title: "Reliability", 
      description: "We deliver on our promises, meeting deadlines and exceeding expectations." 
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white text-gray-800 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-800 to-transparent opacity-40"></div>
      
      {/* Hexagon pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="hexagon-pattern"></div>
      </div>
      
      {/* Large animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left large circle */}
        <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-amber-500/5 border border-amber-500/10 animate-float-slow"></div>
        
        {/* Bottom right large circle */}
        <div className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-blue-800/5 border border-blue-800/10 animate-float-reverse"></div>
        
        {/* Middle left large circle */}
        <div className="absolute left-0 top-1/3 w-64 h-64 rounded-full bg-amber-300/5 border border-amber-300/10 animate-pulse-slow"></div>
        
        {/* Middle right large circle */}
        <div className="absolute right-0 top-2/3 w-64 h-64 rounded-full bg-blue-500/5 border border-blue-500/10 animate-pulse-reverse"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative inline-block mx-auto w-full">
            <span className="relative">
              Our Core 
              <span className="text-amber-500"> Values</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></span>
            </span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            These principles guide everything we do and help us deliver exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`card-wrapper transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-xl transform transition-all duration-500 -z-10 group-hover:scale-105"></div>
                <div className="absolute inset-0 border border-amber-500/20 rounded-xl shadow-lg"></div>
                
                {/* Glowing accent corner */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-amber-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="card text-center p-8 relative border border-gray-200 rounded-xl bg-white/70 backdrop-blur-sm transition-all duration-500 group-hover:bg-white shadow-xl hover:shadow-2xl">
                  <div className="rel mb-6">
                    {/* Icon background with animated border */}
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 border-2 border-amber-500 rounded-full animate-spin-slow opacity-30"></div>
                      <div className="absolute inset-1 border-2 border-blue-800 rounded-full animate-reverse-spin-slow opacity-40"></div>
                      
                      {/* Icon container */}
                      <div className="bg-gradient-to-br from-blue-800 to-gray-100 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto relative z-10 shadow-lg group-hover:shadow-amber-500/20 transition-all duration-500">
                        <div className="text-amber-500 transform group-hover:scale-110 transition-transform duration-300">
                          {value.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-amber-600 mb-3 group-hover:text-amber-500 transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-800 to-transparent mx-auto mb-3 group-hover:w-16 transition-all duration-300"></div>
                  
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Bottom highlight on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 transform translate-y-1 group-hover:opacity-70 group-hover:translate-y-0 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: i % 3 === 0 ? '#FFB800' : i % 3 === 1 ? '#001F3F' : '#E5E7EB',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.1,
                animation: `float-particle ${Math.random() * 15 + 20}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .hexagon-pattern {
          background-color: transparent;
          background-image: 
            radial-gradient(circle at center, #FFB800 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-60vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-reverse-spin-slow {
          animation: reverse-spin-slow 15s linear infinite;
        }
        
        /* Additional CSS */
        
        .card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        
        .card:hover {
          transform: translateY(-5px);
        }
        
        /* Subtle pulse animation for icons */
        @keyframes subtle-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .card:hover .text-amber-500 {
          animation: subtle-pulse 2s ease-in-out infinite;
        }
        
        /* Improved shadow transition */
        .shadow-xl {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.3s ease-in-out;
        }
        
        .hover\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.15);
        }
        
        /* Light shimmer effect on card hover */
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .card:hover::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,0.3) 50%, 
            rgba(255,255,255,0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite linear;
          pointer-events: none;
        }
        
        /* Animations for large circles */
        @keyframes float-slow {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 10px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes float-reverse {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10px, -10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        
        @keyframes pulse-reverse {
          0% { transform: scale(1.1); opacity: 0.8; }
          50% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-reverse {
          animation: pulse-reverse 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}