import { Link } from 'react-router-dom';
import Team from '../../assets/HomePage/Team.jpg';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.why-choose-section');
            if (section) {
                const { top } = section.getBoundingClientRect();
                if (top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
            
            // Track scroll position for wave animation
            setScrollPosition(window.scrollY);
        };

        handleScroll(); // trigger on load in case already in view
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="py-16 bg-[#001F3F] relative why-choose-section overflow-hidden">
            {/* Top Wave SVG - white background */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                        fill="#ffffff"></path>
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-20 xl:px-28">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    {/* Image Section */}
                    <div className={`md:w-1/2 transform duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        <div className="relative overflow-hidden rounded-lg shadow-glow">
                            <img src={Team} alt="Team" className="w-full max-h-[400px] object-cover rounded-lg hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent"></div>
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-500"></div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-500"></div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className={`md:w-1/2 transform duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        <h2 className="text-4xl font-bold text-amber-500 mb-6">
                            Why Choose Us
                            <span className={`block h-1 bg-amber-500 mt-3 transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`}></span>
                        </h2>
                        <p className="text-white mb-8">
                            With over a decade of experience in the tech industry, we've helped hundreds of businesses achieve their goals through innovative technology solutions.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-6">
                            {[
                                { number: '1', title: 'Experienced Team', description: 'Our team brings years of experience to every project.' },
                                { number: '2', title: 'Tailored Solutions', description: 'We design solutions specific to your needs.' },
                                { number: '3', title: 'Ongoing Support', description: 'Continuous support & maintenance provided.' },
                            ].map((item, idx) => (
                                <div key={idx} className={`flex items-start opacity-0 transform ${isVisible ? 'slide-in-right opacity-100' : ''}`} style={{ transitionDelay: `${300 + idx * 150}ms` }}>
                                    <div className="flex-shrink-0 mr-5">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-500 text-[#001F3F] font-bold text-lg">
                                            {item.number}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                        <p className="text-gray-300">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className={`mt-8 transform duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '750ms' }}>
                            <Link to="/about" className="inline-block bg-amber-500 text-[#001F3F] py-3 px-6 rounded-lg font-medium transition-transform hover:scale-105">
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Enhanced Bottom Wave - with parallax and multilayer effect */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                {/* First layer - lighter blue wave with movement */}
                <div className="relative" style={{ transform: `translateX(${scrollPosition * -0.03}px)` }}>
                    <svg className="w-full h-20 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                            fill="#eff6ff" opacity="0.8"></path>
                    </svg>
                </div>
                
                {/* Second layer - main blue-50 wave with opposite movement */}
                <div className="absolute bottom-0 left-0 w-full" style={{ transform: `translateX(${scrollPosition * 0.02}px)` }}>
                    <svg className="w-full h-16 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                            fill="#eff6ff"></path>
                    </svg>
                </div>
                
                {/* Decorative elements within the wave */}
                <div className="absolute bottom-0 left-0 w-full h-16 flex justify-around items-end overflow-hidden">
                    {/* Dynamic bubbles */}
                    {[...Array(8)].map((_, i) => (
                        <div 
                            key={i}
                            className="rounded-full bg-white/20 absolute animate-float"
                            style={{
                                width: `${Math.random() * 30 + 10}px`,
                                height: `${Math.random() * 30 + 10}px`,
                                left: `${i * 12.5}%`,
                                bottom: `${Math.random() * 40}px`,
                                animationDuration: `${Math.random() * 3 + 2}s`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Inline Styles */}
            <style jsx>{`
                .shadow-glow {
                    box-shadow: 0 0 25px rgba(245, 158, 11, 0.15);
                }
                .shadow-glow:hover {
                    box-shadow: 0 0 40px rgba(245, 158, 11, 0.4);
                }
                .slide-in-right {
                    transform: translateX(0);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
                @keyframes float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }
                .animate-float {
                    animation-name: float;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                }
            `}</style>
        </section>
    );
}