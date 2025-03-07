import { Link } from 'react-router-dom';
import HeroImage from '../../assets/HomePage/Hero.jpg'; // Use your hero image
import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Trigger animations after component mounts
        setIsLoaded(true);
        
        // Create floating particles effect
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            for (let i = 0; i < 25; i++) { // Increased number of particles
                const particle = document.createElement('div');
                particle.classList.add('floating-particle');
                
                // Random position, size and animation delay
                const size = Math.random() * 6 + 3;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 3}s`; // Reduced delay
                particle.style.animationDuration = `${Math.random() * 6 + 8}s`; // Faster duration
                
                heroSection.appendChild(particle);
            }
        }
    }, []);

    return (
        <section className="hero-section relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white overflow-hidden"
               style={{ backgroundImage: `url(${HeroImage})` }}>
            
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent opacity-0 animate-fadeIn" 
                 style={{ 
                     animationDelay: '0.2s', // Faster delay
                     animationDuration: '0.8s', // Faster animation
                     animationFillMode: 'forwards'
                 }}>
            </div>
            
            {/* Animated light beam effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="light-beam"></div>
                <div className="light-beam secondary" style={{ animationDelay: '4s' }}></div> {/* Added second beam */}
            </div>
            
            {/* Dark vignette effect
            <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none"></div> */}
            
            {/* Animated patterns */}
            <div className="pattern-grid"></div>
            <div className="noise-overlay"></div>
            
            {/* Content Container */}
            <div className="relative z-10 text-center md:text-left px-6 md:px-12 lg:px-20 max-w-7xl w-full">
                <div className="flex flex-col md:flex-row items-center justify-between h-full py-16 md:py-24">
                    
                    {/* Text Content with staggered animations */}
                    <div className={`md:w-1/2 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {/* Animated accent line */}
                        <div className={`w-16 h-1.5 bg-amber-500 mb-8 rounded-full transition-all duration-500 delay-300 transform ${isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
                             style={{ transformOrigin: 'left' }}></div>
                        
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                            <span className="block overflow-hidden">
                                <span className={`block transition-transform duration-500 delay-400 ${isLoaded ? 'transform-none' : 'translate-y-full'}`}>
                                    Empowering Innovation
                                </span>
                            </span>
                        </h1>
                        
                        <p className={`text-lg md:text-xl mb-8 max-w-xl drop-shadow-md transition-all duration-500 delay-600 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-6'}`}>
                            At BISON Corps, we craft cutting-edge digital solutions to elevate your business — from web development to digital marketing and beyond.
                        </p>
                        
                        <div className={`flex flex-wrap gap-4 justify-center md:justify-start transition-all duration-500 delay-700 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
                            <Link 
                                to="/services"
                                className="group bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg relative overflow-hidden"
                            >
                                <span className="relative z-10">Explore Services</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            </Link>
                            
                            <Link 
                                to="/contact"
                                className="group bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-[#001F3F] transition-all duration-300 shadow-lg relative overflow-hidden"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <span className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Decorative elements - faster animations */}
                    <div className="absolute bottom-16 right-20 w-32 h-32 border-2 border-amber-500/30 rounded-full 
                                   animate-pulse opacity-0"
                         style={{ 
                             animationDelay: '0.8s', // Faster delay
                             animationDuration: '2s', // Faster animation
                             animationFillMode: 'forwards',
                             animationIterationCount: 'infinite'
                         }}>
                    </div>
                    
                    <div className="absolute top-24 left-1/4 w-16 h-16 border border-white/20 rounded-full 
                                   animate-pulse opacity-0"
                         style={{ 
                             animationDelay: '1s', // Faster delay
                             animationDuration: '2.5s', // Faster animation
                             animationFillMode: 'forwards',
                             animationIterationCount: 'infinite'
                         }}>
                    </div>
                    
                    {/* Added decorative elements */}
                    <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-amber-300/20 rounded-full 
                                   animate-float opacity-0"
                         style={{ 
                             animationDelay: '1.2s',
                             animationDuration: '3s',
                             animationFillMode: 'forwards',
                             animationIterationCount: 'infinite'
                         }}>
                    </div>
                    
                    <div className="absolute bottom-1/3 left-20 w-24 h-24 border border-white/10 rounded-full 
                                   animate-spin-slow opacity-0"
                         style={{ 
                             animationDelay: '0.5s',
                             animationDuration: '15s',
                             animationFillMode: 'forwards',
                             animationIterationCount: 'infinite'
                         }}>
                    </div>
                </div>
            </div>
            
            {/* Custom scroll indicator - faster animation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-sm text-white/70 mb-2 animate-fadeIn"
                      style={{ 
                          animationDelay: '1s', // Faster delay
                          animationFillMode: 'forwards' 
                      }}>Scroll Down</span>
                <div className="w-6 h-9 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-scrollDown"></div>
                </div>
            </div>
            
            {/* Add custom styles with faster animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scrollDown {
                    0% { transform: translateY(0); opacity: 1; }
                    70% { opacity: 1; }
                    100% { transform: translateY(20px); opacity: 0; }
                }
                
                @keyframes float {
                    0% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                    100% { transform: translateY(0) rotate(360deg); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes pulse-glow {
                    0% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4); }
                    70% { box-shadow: 0 0 0 15px rgba(245, 158, 11, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
                }
                
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                
                .animate-fadeIn {
                    animation: fadeIn ease-in;
                }
                
                .animate-scrollDown {
                    animation: scrollDown 1s infinite; /* Faster animation */
                }
                
                .animate-float {
                    animation: float ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow linear infinite;
                }
                
                .animate-pulse {
                    animation: pulse-glow ease-in-out infinite;
                }
                
                .bg-radial-gradient {
                    background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
                }
                
                .floating-particle {
                    position: absolute;
                    background-color: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: float linear infinite;
                    z-index: 1;
                }
                
                .light-beam {
                    position: absolute;
                    top: -100%;
                    left: 50%;
                    width: 200px;
                    height: 300%;
                    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 75%);
                    transform: translateX(-50%) rotate(25deg);
                    transform-origin: top center;
                    animation: rotateBeam 10s infinite linear; /* Faster animation */
                    opacity: 0.7;
                }
                
                .light-beam.secondary {
                    width: 150px;
                    opacity: 0.5;
                    animation: rotateBeam 8s infinite linear reverse; /* Different speed and direction */
                }
                
                @keyframes rotateBeam {
                    0% { transform: translateX(-100%) rotate(20deg); }
                    100% { transform: translateX(150%) rotate(30deg); }
                }
                
                /* New CSS effects */
                .pattern-grid {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 20px 20px;
                    z-index: 1;
                    opacity: 0.5;
                }
                
                .noise-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                    opacity: 0.02;
                    z-index: 1;
                    pointer-events: none;
                }
                
                /* Button hover effects */
                .group:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }
                
                /* Shimmer effect for text */
                h1 span {
                    position: relative;
                }
                
                h1 span::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg, 
                        rgba(255, 255, 255, 0) 0%, 
                        rgba(255, 255, 255, 0.2) 50%, 
                        rgba(255, 255, 255, 0) 100%
                    );
                    background-size: 200% 100%;
                    animation: shimmer 3s infinite;
                    opacity: 0;
                    transition: opacity 0.5s ease-in;
                }
                
                h1:hover span::after {
                    opacity: 1;
                }
                
                /* Accent line flash effect */
                @keyframes flash {
                    0% { box-shadow: 0 0 5px rgba(245, 158, 11, 0.5); }
                    50% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.8); }
                    100% { box-shadow: 0 0 5px rgba(245, 158, 11, 0.5); }
                }
                
                .bg-amber-500 {
                    animation: flash 3s infinite;
                }
            `}</style>
        </section>
    );
}