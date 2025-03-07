import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        setIsVisible(true);
        
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
    return (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
            {/* Parallax effect on circles based on mouse position */}
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 opacity-50 blur-sm"
                 style={{ 
                     transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` 
                 }}></div>
            <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-gradient-to-tl from-blue-100 to-blue-50 opacity-30 blur-sm"
                 style={{ 
                     transform: `translate(${-mousePosition.x * 15}px, ${mousePosition.y * 15}px)` 
                 }}></div>
            <div className="absolute -bottom-48 -right-48 w-128 h-128 rounded-full bg-gradient-to-bl from-blue-100 to-blue-50 opacity-50 blur-sm"
                 style={{ 
                     transform: `translate(${-mousePosition.x * 25}px, ${-mousePosition.y * 25}px)` 
                 }}></div>
            <div className="absolute bottom-40 left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 opacity-40 blur-sm"
                 style={{ 
                     transform: `translate(${mousePosition.x * 18}px, ${-mousePosition.y * 18}px)` 
                 }}></div>
            
            {/* Additional circles with enhanced styles */}
            <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 opacity-20 blur-sm animate-float-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-gradient-to-l from-blue-50 to-blue-100 opacity-30 blur-sm animate-float-reverse"></div>
            <div className="absolute top-10 left-1/4 w-48 h-48 rounded-full bg-gradient-to-b from-blue-100 to-blue-50 opacity-25 blur-sm animate-float-medium"></div>
            <div className="absolute -bottom-20 left-1/2 w-80 h-80 rounded-full bg-gradient-to-t from-blue-100 to-blue-50 opacity-35 blur-sm animate-float-slow"></div>
            
            {/* Medium circles with pulse effects */}
            <div className="absolute top-2/3 left-2/5 w-24 h-24 rounded-full bg-blue-100 opacity-25 animate-pulse-slow"></div>
            <div className="absolute top-1/5 right-1/3 w-32 h-32 rounded-full bg-blue-50 opacity-20 animate-pulse-medium"></div>
            <div className="absolute bottom-2/5 right-10 w-28 h-28 rounded-full bg-blue-100 opacity-15 animate-pulse-fast"></div>
            <div className="absolute top-1/2 right-2/3 w-20 h-20 rounded-full bg-blue-50 opacity-30 animate-pulse-slow"></div>
            
            {/* Small circles */}
            <div className="absolute top-1/3 left-10 w-16 h-16 rounded-full bg-blue-100 opacity-20"></div>
            <div className="absolute bottom-1/3 right-20 w-12 h-12 rounded-full bg-blue-50 opacity-25"></div>
            <div className="absolute top-2/5 right-1/5 w-14 h-14 rounded-full bg-blue-100 opacity-15"></div>
            <div className="absolute bottom-1/5 left-1/4 w-10 h-10 rounded-full bg-blue-50 opacity-30"></div>
            
            {/* Animated grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-radial-gradient opacity-30"></div>
            
            <div className={`container mx-auto px-6 lg:px-16 text-center relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Enhanced decorative line with gradient and pulse */}
                <div className={`h-1 mx-auto mb-6 transition-all duration-700 delay-300 transform ${isVisible ? 'w-24' : 'w-0'} bg-gradient-to-r from-[#001F3F] via-[#3A6D8C] to-[#001F3F] animate-gradient-x rounded-full glow-line`}></div>
                
                {/* Enhanced heading with text gradient and text shadow */}
                <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'} text-gradient`}>
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001F3F] to-[#3A6D8C] to-blue-400 animate-gradient-x enhanced-gradient">Transform</span> <br className="hidden md:block" /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A6D8C] to-[#001F3F] to-blue-500 animate-gradient-x enhanced-gradient">Your Business?</span>
                </h2>
                
                {/* Enhanced description with subtle gradient */}
                <p className={`text-lg max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'} text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-600`}>
                    Contact us today to discover how our innovative technical solutions can help your business thrive in the digital age.
                </p>
                
                {/* Enhanced CTA Button with advanced hover effects */}
                <Link
                    to="/contact"
                    className={`group bg-[#001F3F] text-white font-semibold py-3 px-8 rounded-full shadow-lg inline-block transition-all duration-300 hover:shadow-xl hover:translate-y-1 hover:scale-105 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} cta-button`}
                    style={{
                        transitionDelay: '900ms',
                        boxShadow: '0 4px 14px rgba(0, 31, 63, 0.25)'
                    }}
                >
                    <span className="relative z-10">Get Started</span>
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#3A6D8C] to-[#001F3F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="btn-glow"></span>
                </Link>
                
                {/* Enhanced animated dots with trailing effects */}
                <div className="w-2 h-2 bg-gradient-to-r from-[#001F3F] to-[#3A6D8C] rounded-full absolute left-1/4 top-1/4 animate-ping-trail opacity-20"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-[#3A6D8C] to-[#001F3F] rounded-full absolute right-1/3 bottom-1/4 animate-ping-trail opacity-20 animation-delay-1000"></div>
                <div className="w-4 h-4 bg-gradient-to-r from-[#001F3F] to-[#3A6D8C] rounded-full absolute left-1/3 bottom-1/3 animate-ping-trail opacity-20 animation-delay-2000"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-[#3A6D8C] to-[#001F3F] rounded-full absolute right-1/4 top-1/3 animate-ping-trail opacity-20 animation-delay-1500"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-[#001F3F] to-[#3A6D8C] rounded-full absolute left-1/5 top-2/3 animate-ping-trail opacity-20 animation-delay-500"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-[#3A6D8C] to-[#001F3F] rounded-full absolute right-1/5 bottom-2/3 animate-ping-trail opacity-20 animation-delay-2500"></div>
            </div>
            
            {/* Advanced CSS animations and effects */}
            <style>{`
                /* Floating animations for background elements */
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-10px) translateX(5px); }
                    50% { transform: translateY(0) translateX(10px); }
                    75% { transform: translateY(10px) translateX(5px); }
                }
                
                @keyframes float-medium {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-15px) translateX(7px); }
                    50% { transform: translateY(0) translateX(15px); }
                    75% { transform: translateY(15px) translateX(7px); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(10px) translateX(-5px); }
                    50% { transform: translateY(0) translateX(-10px); }
                    75% { transform: translateY(-10px) translateX(-5px); }
                }
                
                /* Pulsing animations */
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.2; }
                    50% { transform: scale(1.1); opacity: 0.3; }
                }
                
                @keyframes pulse-medium {
                    0%, 100% { transform: scale(1); opacity: 0.15; }
                    50% { transform: scale(1.15); opacity: 0.25; }
                }
                
                @keyframes pulse-fast {
                    0%, 100% { transform: scale(1); opacity: 0.1; }
                    50% { transform: scale(1.2); opacity: 0.2; }
                }
                
                /* Moving gradient animation */
                @keyframes gradient-x {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                /* Enhanced ping animation with trail */
                @keyframes ping-trail {
                    0% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    75% { transform: scale(1.75); opacity: 0.2; }
                    100% { transform: scale(2); opacity: 0; }
                }
                
                /* Apply animations to elements */
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                
                .animate-float-medium {
                    animation: float-medium 6s ease-in-out infinite;
                }
                
                .animate-float-reverse {
                    animation: float-reverse 7s ease-in-out infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 5s ease-in-out infinite;
                }
                
                .animate-pulse-medium {
                    animation: pulse-medium 4s ease-in-out infinite;
                }
                
                .animate-pulse-fast {
                    animation: pulse-fast 3s ease-in-out infinite;
                }
                
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 5s ease infinite;
                }
                
                .animate-ping-trail {
                    animation: ping-trail 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                
                /* Animation delay utilities */
                .animation-delay-500 {
                    animation-delay: 500ms;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1000ms;
                }
                
                .animation-delay-1500 {
                    animation-delay: 1500ms;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2000ms;
                }
                
                .animation-delay-2500 {
                    animation-delay: 2500ms;
                }
                
                /* Grid pattern overlay */
                .grid-pattern {
                    background-image: linear-gradient(to right, rgba(0, 31, 63, 0.05) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(0, 31, 63, 0.05) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                
                /* Radial gradient overlay */
                .bg-radial-gradient {
                    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
                }
                
                /* Enhanced text gradients */
                .enhanced-gradient {
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-fill-color: transparent;
                    text-shadow: 0 2px 4px rgba(0, 31, 63, 0.1);
                }
                
                /* Text gradient with subtle shadow */
                .text-gradient {
                    color: #001F3F;
                    text-shadow: 1px 1px 1px rgba(0, 31, 63, 0.1);
                    transition: text-shadow 0.3s ease;
                }
                
                .text-gradient:hover {
                    text-shadow: 2px 2px 4px rgba(0, 31, 63, 0.2);
                }
                
                /* Glow effect for the line */
                .glow-line {
                    box-shadow: 0 0 5px rgba(0, 31, 63, 0.3);
                    transition: box-shadow 0.3s ease, width 0.7s ease;
                }
                
                .glow-line:hover {
                    box-shadow: 0 0 10px rgba(0, 31, 63, 0.5);
                }
                
                /* Button glow effect */
                .cta-button {
                    position: relative;
                    overflow: hidden;
                }
                
                .btn-glow {
                    position: absolute;
                    width: 50px;
                    height: 100%;
                    top: 0;
                    left: -100px;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.4),
                        transparent
                    );
                    transform: skewX(-20deg);
                    animation: btnGlow 5s infinite;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .cta-button:hover .btn-glow {
                    opacity: 1;
                }
                
                @keyframes btnGlow {
                    0% { left: -100px; }
                    20% { left: 150%; }
                    100% { left: 150%; }
                }
            `}</style>
        </section>
    );
}