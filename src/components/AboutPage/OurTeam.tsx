import React, { useEffect, useState } from 'react';
import { Code, GitBranch, Zap } from 'lucide-react';

const TeamShowcase = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="team-section min-h-[50vh] bg-gradient-to-b from-black to-[#001F3F] text-white flex flex-col justify-center items-center px-8 md:px-12 lg:px-16 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="stars"></div>
                <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
                <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
            </div>
            
            {/* Header with animated underline */}
            <div className="relative z-10 mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
                    Our <span className="text-gradient">Team</span>
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-[#001F3F] mx-auto"></div>
            </div>

            {/* Team concept - more compact */}
            <div className={`relative z-10 max-w-3xl mx-auto transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} mb-8`}>
                <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
                    <div className="flex items-center justify-center gap-8 mb-4">
                        <Code size={24} className="text-amber-500" />
                        <GitBranch size={24} className="text-blue-400" />
                        <Zap size={24} className="text-amber-500" />
                    </div>
                    
                    <p className="text-gray-300 text-center max-w-2xl">
                        A collaborative group of innovators crafting elegant solutions with cutting-edge technology. We combine diverse expertise across the full stack to deliver exceptional software that exceeds expectations.
                    </p>
                </div>
            </div>

            {/* Bottom wave divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
                <div className="absolute bottom-0 left-0 w-full h-12 bg-blue-50"></div>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none" 
                    className="relative block w-full h-12"
                >
                    <path 
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                        fill="#001F3F" 
                    />
                </svg>
            </div>

            <style>{`
                /* Text gradient animation */
                .text-gradient {
                    background: linear-gradient(to right, #FFB800, #001F3F);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    background-size: 200% auto;
                    animation: shine 4s linear infinite;
                }
                
                @keyframes shine {
                    to {
                        background-position: 200% center;
                    }
                }
                
                /* Stars background */
                .stars {
                    background: #000 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23222' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23333'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
                    opacity: 0.15;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default TeamShowcase;