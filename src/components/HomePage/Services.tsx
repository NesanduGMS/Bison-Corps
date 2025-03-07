import { ArrowRight, Code, Cloud, Shield, Users } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Add these animation styles to your global CSS file
// Or create a CSS file and import it at the top of this component
const animationStyles = `
@keyframes floatSlow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

@keyframes floatMedium {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes floatFast {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
`;

export default function Services() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Create a style element for the animations
        const styleElement = document.createElement('style');
        styleElement.innerHTML = animationStyles;
        document.head.appendChild(styleElement);
        
        // Set visibility for animations
        setIsVisible(true);
        
        // Clean up when component unmounts
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    const services = [
        {
            title: "Software Development",
            description: "Custom software solutions tailored to your business needs and objectives.",
            icon: <Code size={28} />,
            color: "#4A90E2"
        },
        {
            title: "Cloud Solutions",
            description: "Scalable and secure cloud infrastructure to power your business applications.",
            icon: <Cloud size={28} />,
            color: "#50C878"
        },
        {
            title: "IT Consulting",
            description: "Expert advice and strategic planning to optimize your technology investments.",
            icon: <Users size={28} />,
            color: "#9370DB"
        },
        {
            title: "Cybersecurity",
            description: "Comprehensive security solutions to protect your business from threats.",
            icon: <Shield size={28} />,
            color: "#FF6B6B"
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Enhanced background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Original circular elements */}
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-50 opacity-40"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-50 opacity-30"></div>
                <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-amber-50 opacity-30"></div>
                <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-50 opacity-20"></div>
                
                {/* New decorative elements */}
                <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-green-50 opacity-25"></div>
                <div className="absolute bottom-1/2 left-10 w-24 h-24 rounded-full bg-purple-50 opacity-20"></div>
                <div className="absolute top-3/4 right-1/2 w-56 h-56 rounded-full bg-amber-50 opacity-15"></div>
                
                {/* Animated floating elements */}
                <div 
                    className="absolute top-20 right-20 w-12 h-12 rounded-full bg-blue-100 opacity-30" 
                    style={{ animation: 'floatSlow 8s ease-in-out infinite' }}
                ></div>
                <div 
                    className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-amber-100 opacity-25" 
                    style={{ animation: 'floatMedium 6s ease-in-out infinite' }}
                ></div>
                <div 
                    className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-indigo-100 opacity-20" 
                    style={{ animation: 'floatFast 4s ease-in-out infinite' }}
                ></div>
                
                {/* Gradient stripes */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent opacity-20 rotate-12"></div>
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-amber-100 to-transparent opacity-15 -rotate-12"></div>
                
                {/* Dotted pattern overlay */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{ 
                        backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                ></div>
                
                {/* Grid pattern */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{ 
                        backgroundImage: `
                            linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                ></div>
                
                {/* Subtle wave pattern */}
                <div 
                    className="absolute bottom-0 left-0 w-full h-64 opacity-10"
                    style={{ 
                        backgroundImage: `
                            linear-gradient(45deg, rgba(59, 130, 246, 0.05) 25%, transparent 25%),
                            linear-gradient(-45deg, rgba(59, 130, 246, 0.05) 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.05) 75%),
                            linear-gradient(-45deg, transparent 75%, rgba(59, 130, 246, 0.05) 75%)
                        `,
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }}
                ></div>
            </div>
            
            <div className={`container mx-auto px-6 lg:px-20 xl:px-28 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                    {/* Animated decorative line */}
                    <div className={`w-24 h-1 bg-gradient-to-r from-[#001F3F] to-[#FFD700] mx-auto mb-6 rounded-full transition-transform duration-1000 ${isVisible ? 'transform scale-x-100' : 'transform scale-x-0'}`}></div>
                    
                    <h2 className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#001F3F] to-[#003366] text-center mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}>
                        Our Services
                    </h2>
                    
                    <p className={`text-center text-gray-700 max-w-3xl mx-auto mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                        We offer a comprehensive range of technical services to help your business thrive in the digital age.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className={`group p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-[#FFD700] relative z-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{
                                transitionDelay: `${300 + (index * 150)}ms`,
                                boxShadow: '0 10px 30px rgba(0, 31, 63, 0.08)'
                            }}
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                            
                            {/* Corner decorative element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                            
                            {/* Icon container with gradient background */}
                            <div 
                                className="relative bg-[#001F3F] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                                style={{
                                    background: `linear-gradient(135deg, #001F3F, ${service.color})`,
                                    boxShadow: `0 5px 15px rgba(0, 31, 63, 0.2)`
                                }}
                            >
                                {/* Animated pulse effect on hover */}
                                <div className="absolute inset-0 rounded-full bg-white opacity-30 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000"></div>
                                {service.icon}
                            </div>
                            
                            <h3 className="text-2xl font-semibold text-[#001F3F] mb-3 transition-colors duration-300 group-hover:text-[#003366]">{service.title}</h3>
                            
                            <p className="text-gray-700 mb-4 transition-colors duration-300 group-hover:text-gray-800">{service.description}</p>
                            
                            <Link 
                                to="/services" 
                                className="text-[#001F3F] font-medium flex items-center group-hover:text-amber-500 transition-colors duration-300 relative"
                            >
                                <span>Learn more</span>
                                <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                
                                {/* Animated underline effect */}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}