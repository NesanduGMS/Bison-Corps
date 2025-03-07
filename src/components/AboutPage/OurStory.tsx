import React, { useEffect, useState } from 'react';
import OurStory from '../../assets/About/OurStory.jpg';

export default function OurStorySection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById('our-story-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="our-story-section"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('../../assets/About/OurStory.jpg')] bg-cover bg-center bg-fixed"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-amber-500 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-amber-500 opacity-40"></div>
      
      <div className="absolute -left-4 top-1/4 w-24 h-24 rounded-full bg-[#001F3F] opacity-30 blur-xl"></div>
      <div className="absolute -right-4 bottom-1/4 w-20 h-20 rounded-full bg-amber-500 opacity-20 blur-xl"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <h2 className="text-4xl font-bold text-amber-500 mb-8 relative inline-block">
                Our Story
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-amber-500 to-transparent"></span>
              </h2>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2010, TechSolutions began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of three passionate developers has grown into a comprehensive technical solutions provider with over 100 employees serving clients worldwide.
            </p>
            
            <div className="w-16 h-1 bg-[#001F3F] my-6"></div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Throughout our journey, we've remained committed to our core values of innovation, excellence, and client satisfaction. We believe that technology should be an enabler, not a barrier, and we work tirelessly to create solutions that are both powerful and user-friendly.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Today, we're proud to be a trusted partner to businesses of all sizes, from startups to Fortune 500 companies, helping them navigate the complex world of technology and emerge stronger, more efficient, and ready for the future.
            </p>
          </div>
          
          <div className={`md:w-1/2 md:pl-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-amber-500 rounded-lg transform rotate-3 group-hover:rotate-0 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-[#001F3F] rounded-lg transform -rotate-3 group-hover:rotate-0 transition-all duration-300"></div>
              <img
                src={OurStory}
                alt="Our team"
                className="rounded-lg shadow-2xl w-full border-4 border-amber-500 relative z-10 transform group-hover:scale-105 transition-all duration-500"
              />
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#001F3F] rounded-full opacity-50 z-0"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-amber-500 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-y ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes float-y {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-50vh) scale(0.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
}