import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from '../../assets/Services/1.jpg';
import Image2 from '../../assets/Services/2.jpg';
import Image3 from '../../assets/Services/3.jpg';
import Image4 from '../../assets/Services/4.jpg';

export default function OurProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const steps = document.querySelectorAll('.process-step');
    steps.forEach((step) => observer.observe(step));

    return () => {
      steps.forEach((step) => observer.unobserve(step));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-black text-white">
      <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 relative inline-block">
            Our Process
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-300"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We follow a proven methodology to ensure successful project delivery and client satisfaction.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Colorful timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-amber-500 via-white to-amber-500 rounded-full"></div>
          
          <div className="space-y-12 relative">
            <div className="process-step opacity-0 transition-all duration-700 flex flex-col md:flex-row items-center">
              <div className="md:w-5/12 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-amber-500 mb-2 flex md:justify-end items-center">
                  <span className="inline-block bg-gradient-to-r from-amber-600 to-amber-400 text-black rounded-full w-8 h-8 flex items-center justify-center md:hidden mr-2">1</span>
                  Discovery
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  We begin by understanding your business, goals, and requirements through in-depth discussions.
                </p>
              </div>
              <div className="md:w-2/12 flex justify-center">
                <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-black rounded-full w-10 h-10 flex items-center justify-center z-10 shadow-lg transform transition-transform hover:scale-110">
                  1
                </div>
              </div>
              <div className="md:w-5/12 md:pl-12">
                <div className="rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                  <img src={Image} alt="Discovery Phase" className="w-full h-32 md:h-40 object-cover" />
                </div>
              </div>
            </div>
            
            <div className="process-step opacity-0 transition-all duration-700 flex flex-col md:flex-row items-center">
              <div className="md:w-5/12 md:pr-12 order-2 md:order-1">
                <div className="rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                  <img src={Image2} alt="Planning Phase" className="w-full h-32 md:h-40 object-cover" />
                </div>
              </div>
              <div className="md:w-2/12 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div className="bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center z-10 shadow-lg transform transition-transform hover:scale-110">
                  2
                </div>
              </div>
              <div className="md:w-5/12 md:pl-12 md:text-left order-3">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <span className="inline-block bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center md:hidden mr-2">2</span>
                  Planning
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  We develop a detailed project plan, including timelines, milestones, and resource allocation.
                </p>
              </div>
            </div>
            
            <div className="process-step opacity-0 transition-all duration-700 flex flex-col md:flex-row items-center">
              <div className="md:w-5/12 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-amber-500 mb-2 flex md:justify-end items-center">
                  <span className="inline-block bg-gradient-to-r from-amber-600 to-amber-400 text-black rounded-full w-8 h-8 flex items-center justify-center md:hidden mr-2">3</span>
                  Development
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Our expert team executes the plan, building your solution with regular updates and feedback cycles.
                </p>
              </div>
              <div className="md:w-2/12 flex justify-center">
                <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-black rounded-full w-10 h-10 flex items-center justify-center z-10 shadow-lg transform transition-transform hover:scale-110">
                  3
                </div>
              </div>
              <div className="md:w-5/12 md:pl-12">
                <div className="rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                  <img src={Image3} alt="Development Phase" className="w-full h-32 md:h-40 object-cover" />
                </div>
              </div>
            </div>
            
            <div className="process-step opacity-0 transition-all duration-700 flex flex-col md:flex-row items-center">
              <div className="md:w-5/12 md:pr-12 order-2 md:order-1">
                <div className="rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                  <img src={Image4} alt="Deployment Phase" className="w-full h-32 md:h-40 object-cover" />
                </div>
              </div>
              <div className="md:w-2/12 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div className="bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center z-10 shadow-lg transform transition-transform hover:scale-110">
                  4
                </div>
              </div>
              <div className="md:w-5/12 md:pl-12 md:text-left order-3">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <span className="inline-block bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center md:hidden mr-2">4</span>
                  Deployment & Support
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  We carefully deploy your solution and provide ongoing support and maintenance to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .process-step.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .process-step {
            transform: translateY(20px);
          }
          
          /* Additional Animations */
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideInRight {
            from { transform: translateX(30px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideInLeft {
            from { transform: translateX(-30px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          .process-step.visible h3 {
            animation: fadeIn 0.6s ease-out forwards, slideInRight 0.8s ease-out forwards;
          }
          
          .process-step.visible p {
            animation: fadeIn 0.6s ease-out 0.3s forwards, slideInRight 0.8s ease-out 0.3s forwards;
            opacity: 0;
            animation-fill-mode: forwards;
          }
          
          .process-step.visible:nth-child(even) h3,
          .process-step.visible:nth-child(even) p {
            animation-name: fadeIn, slideInLeft;
          }
          
          .process-step.visible div.rounded-lg {
            animation: pulse 2s infinite ease-in-out;
          }
          
          .process-step.visible div.rounded-full {
            animation: pulse 2s infinite ease-in-out;
          }
        `}</style>
      </div>
    </section>
  );
}