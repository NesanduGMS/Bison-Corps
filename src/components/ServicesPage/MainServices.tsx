import { Code, Cloud, Shield, Users, Database, Cpu, BarChart, Globe, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function MainServices() {
    const canvasRef = useRef(null);
    
    // Initialize and run the particle animation
    useEffect(() => {
        if (!canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions to match parent container
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Particle class
        class Particle {
            constructor() {
                this.reset();
            }
            
            reset() {
                // Random position
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                
                // Random size
                this.size = Math.random() * 5 + 1;
                
                // Random colors
                const colors = ['#F59E0B', '#001F3F', '#38bdf8', '#f472b6', '#4ade80'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                
                // Random movement speed
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                
                // Random opacity
                this.alpha = Math.random() * 0.5 + 0.1;
            }
            
            update() {
                // Update position
                this.x += this.speedX;
                this.y += this.speedY;
                
                // Reset if out of bounds
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            
            draw() {
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }
        
        // Create particles
        const particleCount = 30;
        const particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        const animate = () => {
            // Clear canvas with semi-transparent white for trailing effect
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Continue animation
            requestAnimationFrame(animate);
        };
        
        animate();
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    // Services data for easy mapping
    const services = [
        {
            icon: <Code size={24} />,
            title: "Software Development",
            description: "Custom software solutions tailored to your specific business needs.",
            items: ["Web applications", "Enterprise systems", "API integration", "System modernization"]
        },
        {
            icon: <Cloud size={24} />,
            title: "Cloud Solutions",
            description: "Leverage the power of cloud computing with our comprehensive services.",
            items: ["Cloud migration", "Infrastructure setup", "Serverless architecture", "Cost optimization"]
        },
        {
            icon: <Users size={24} />,
            title: "IT Consulting",
            description: "Strategic guidance to help you make informed technology decisions.",
            items: ["IT strategy", "Technology roadmap", "Digital transformation", "IT assessment"]
        },
        {
            icon: <Shield size={24} />,
            title: "Cybersecurity",
            description: "Protect your business from cyber threats with our security solutions.",
            items: ["Security audits", "Vulnerability management", "Incident response", "Security training"]
        },
        {
            icon: <Database size={24} />,
            title: "Data Services",
            description: "Unlock the power of your data with our specialized data services.",
            items: ["Data analytics", "Business intelligence", "Database optimization", "Data governance"]
        },
        {
            icon: <Cpu size={24} />,
            title: "IoT Solutions",
            description: "Connect your physical systems to the digital world with IoT.",
            items: ["IoT architecture", "Sensor integration", "IoT analytics", "Remote monitoring"]
        },
        {
            icon: <BarChart size={24} />,
            title: "Business Analytics",
            description: "Transform data into actionable insights to drive business decisions.",
            items: ["Performance metrics", "Predictive analytics", "Custom dashboards", "Reporting"]
        },
        {
            icon: <Globe size={24} />,
            title: "Web Services",
            description: "Establish your online presence with our professional web services.",
            items: ["Website development", "E-commerce", "CMS solutions", "Web optimization"]
        },
        {
            icon: <PenTool size={24} />,
            title: "UX/UI Design",
            description: "Create intuitive and engaging user experiences for your digital products.",
            items: ["User research", "Interface design", "Prototyping", "Usability testing"]
        },
        // You can add a 10th service if needed
    ];

    return (
        <section className="py-12 relative overflow-hidden">
            {/* Animated background canvas */}
            <canvas 
                ref={canvasRef} 
                className="absolute top-0 left-0 w-full h-full z-0"
            />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-8 relative">
                    <div className="inline-block">
                        <h2 className="text-3xl font-bold mb-2 relative inline-block">
                            <span className="relative z-10">Core Services</span>
                            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3C50 0.5 150 0.5 200 3C150 5.5 50 5.5 0 3Z" fill="#F59E0B"/>
                            </svg>
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm mt-2">
                        Our primary service offerings that help businesses transform through technology.
                    </p>
                </div>
                
                {/* 3 cards per row grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white/90 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md transition-all duration-300 hover:shadow-xl overflow-hidden h-64"
                            style={{
                                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both, 
                                           float 5s ease-in-out ${index * 0.2}s infinite`
                            }}
                        >
                            {/* Glass effect on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-amber-500/30 to-[#001F3F]/30 backdrop-blur-sm"></div>
                            
                            {/* Colorful corner accent */}
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-amber-500 rotate-45 transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-[#3b82f6]"></div>
                            
                            {/* Content container */}
                            <div className="p-5 flex flex-col h-full relative z-10">
                                {/* Icon with pulse animation */}
                                <div className="flex-shrink-0 mb-3">
                                    <div className="bg-[#001F3F] text-white p-2 rounded-lg w-10 h-10 flex items-center justify-center transform transition-all duration-300 group-hover:bg-amber-500 group-hover:rotate-12 group-hover:scale-110 relative overflow-hidden">
                                        <span className="absolute w-full h-full top-0 left-0 bg-white opacity-0 group-hover:animate-ping-slow"></span>
                                        {service.icon}
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="flex-grow flex flex-col">
                                    <h3 className="text-lg font-semibold text-[#001F3F] mb-1 transition-colors duration-300 group-hover:text-amber-500 transform group-hover:translate-x-1">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-2 line-clamp-2 transition-all duration-300 group-hover:text-gray-800">{service.description}</p>
                                    
                                    {/* Key features with staggered animation */}
                                    <ul className="text-gray-600 text-xs space-y-1 mb-auto">
                                        {service.items.slice(0, 2).map((item, i) => (
                                            <li 
                                                key={i} 
                                                className="flex items-center transition-all duration-300"
                                                style={{
                                                    transform: 'translateX(0)',
                                                    transition: `transform 0.3s ease ${i * 0.1}s`,
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateX(8px)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateX(0)';
                                                }}
                                            >
                                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                                                <span className="truncate">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {/* Link with slide animation */}
                                    <Link 
                                        to="/contact" 
                                        className="mt-2 inline-block text-xs text-[#001F3F] font-medium transition-all duration-300 group-hover:text-amber-500 relative overflow-hidden"
                                    >
                                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 inline-block">
                                            Learn more
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* View all services button with enhanced animation */}
                <div className="text-center">
                    <Link 
                        to="/services" 
                        className="inline-block px-6 py-2 bg-gradient-to-r from-[#001F3F] to-[#0e3868] text-white rounded transition-all duration-300 hover:from-amber-500 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/20 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
                    >
                        <span className="relative z-10">View All Services</span>
                        <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full hover:animate-shine"></span>
                    </Link>
                </div>
            </div>
            
            {/* Add keyframe animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0px); }
                }
                
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 0; }
                    50% { opacity: 0.1; }
                    100% { transform: scale(2); opacity: 0; }
                }
                
                @keyframes shine {
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
}