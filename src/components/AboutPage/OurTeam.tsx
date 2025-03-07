import React, { useEffect, useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
    {
        name: 'John Doe',
        position: 'CEO',
        bio: 'Visionary leader with 20 years of industry experience.',
        imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: 'Jane Smith',
        position: 'CTO',
        bio: 'Tech guru with expertise in AI and cloud computing.',
        imgUrl: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        name: 'Mike Johnson',
        position: 'CFO',
        bio: 'Finance expert ensuring fiscal stability.',
        imgUrl: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        name: 'Emily Davis',
        position: 'COO',
        bio: 'Operations strategist driving process improvements.',
        imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: 'Alex Brown',
        position: 'CMO',
        bio: 'Marketing specialist building global brand awareness.',
        imgUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
];

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="hero-section min-h-screen bg-gradient-to-b from-black to-[#001F3F] text-white flex flex-col justify-center items-center px-8 md:px-12 lg:px-16 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="stars"></div>
                <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl"></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-[#001F3F]/30 blur-3xl"></div>
            </div>
            
            {/* Header with animated underline */}
            <div className="relative z-10 mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
                    Meet Our <span className="text-gradient">Team</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-[#001F3F] mx-auto"></div>
                <p className="text-gray-400 mt-4 max-w-2xl">
                    The talented individuals behind our success, working together to achieve extraordinary results.
                </p>
            </div>

            {/* Adjusted grid layout to handle larger cards */}
            <div className="w-full max-w-7xl mx-auto z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-16'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="group relative h-full">
                                {/* Card background with improved glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-gray-700"></div>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-[#001F3F] rounded-xl opacity-0 group-hover:opacity-50 blur-md transition-all duration-500 group-hover:duration-200"></div>
                                
                                {/* Inner card content */}
                                <div className="card relative flex flex-col items-center p-6 bg-black/90 backdrop-blur-sm rounded-xl border border-gray-800 z-10 overflow-hidden h-full">
                                    {/* Halo effect around image */}
                                    <div className="absolute top-16 w-32 h-32 rounded-full bg-gradient-to-br from-amber-500/20 to-[#001F3F]/20 blur-xl transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
                                    
                                    {/* Image with border animation - INCREASED SIZE */}
                                    <div className="relative mb-4 z-10">
                                        <div className="absolute inset-0 rounded-full image-border"></div>
                                        <img
                                            src={member.imgUrl}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full object-cover relative z-10 p-1 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    
                                    {/* Content with hover effects */}
                                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-500 transition-colors duration-300 text-center">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#001F3F] bg-amber-500 px-3 py-1 rounded-full text-sm font-medium mb-3 relative text-center inline-block">
                                        {member.position}
                                    </p>
                                    {/* Expanded bio section */}
                                    <p className="text-gray-300 text-sm text-center group-hover:text-white transition-colors duration-300 mb-4">
                                        {member.bio}
                                    </p>
                                    
                                    {/* Social icons */}
                                    <div className="mt-auto flex space-x-4 opacity-70 group-hover:opacity-100 transform translate-y-0 transition-all duration-300">
                                        <a href="#" className="text-white hover:text-amber-500 transition-colors duration-300">
                                            <Linkedin size={18} />
                                        </a>
                                        <a href="#" className="text-white hover:text-amber-500 transition-colors duration-300">
                                            <Twitter size={18} />
                                        </a>
                                        <a href="#" className="text-white hover:text-amber-500 transition-colors duration-300">
                                            <Mail size={18} />
                                        </a>
                                    </div>
                                    
                                    {/* Enhanced particle effect */}
                                    <div className="particle-container absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

                    {/* Bottom wave divider */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
    {/* Background color to fill below the wave */}
    <div className="absolute bottom-0 left-0 w-full h-16 bg-blue-50"></div>

    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-full h-16"
    >
        <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="#001F3F" 
        />
    </svg>
</div>

            <style jsx>{`
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
                
                /* Image border animations */
                .image-border {
                    border: 2px solid transparent;
                    border-radius: 50%;
                    background: linear-gradient(45deg, #F59E0B, transparent, #001F3F, transparent, #F59E0B) border-box;
                    animation: rotate-border 8s linear infinite;
                }
                
                @keyframes rotate-border {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                /* Enhanced particle effect */
                .particle-container::before {
                    content: '';
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    top: -50%;
                    left: -50%;
                    z-index: -1;
                    background-image: 
                        radial-gradient(circle at 30% 40%, rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                        radial-gradient(circle at 70% 60%, rgba(0, 31, 63, 0.1) 1px, transparent 1px),
                        radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                        radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 16px 16px;
                    animation: particle-float 10s linear infinite;
                }
                
                @keyframes particle-float {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    100% { transform: translate(-50px, -50px) rotate(15deg); }
                }
                
                /* Card hover effects */
                .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .group:hover .card {
                    transform: translateY(-5px);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
            `}</style>
        </div>
    );
};

export default Hero;