import React from 'react';
import { ArrowRight, Code, Cloud, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#3A6D8C] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovative Technical Solutions for Your Business</h1>
              <p className="text-lg mb-8">We help businesses transform through technology with our cutting-edge solutions and expert services.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="bg-white text-[#001F3F] hover:bg-[#6A9AB0] hover:text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                  Our Services
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Technology illustration" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We offer a comprehensive range of technical services to help your business thrive in the digital age.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Software Development</h3>
              <p className="text-gray-600 mb-4">Custom software solutions tailored to your business needs and objectives.</p>
              <Link to="/services" className="text-[#3A6D8C] font-medium flex items-center hover:text-[#001F3F]">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Cloud size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">Scalable and secure cloud infrastructure to power your business applications.</p>
              <Link to="/services" className="text-[#3A6D8C] font-medium flex items-center hover:text-[#001F3F]">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">IT Consulting</h3>
              <p className="text-gray-600 mb-4">Expert advice and strategic planning to optimize your technology investments.</p>
              <Link to="/services" className="text-[#3A6D8C] font-medium flex items-center hover:text-[#001F3F]">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Comprehensive security solutions to protect your business from threats.</p>
              <Link to="/services" className="text-[#3A6D8C] font-medium flex items-center hover:text-[#001F3F]">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team working together" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="section-heading">Why Choose Us</h2>
              <p className="text-gray-600 mb-8">
                With over a decade of experience in the tech industry, we've helped hundreds of businesses achieve their goals through innovative technology solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#3A6D8C] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#001F3F] mb-1">Experienced Team</h3>
                    <p className="text-gray-600">Our team of experts brings years of industry experience to every project.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#3A6D8C] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#001F3F] mb-1">Tailored Solutions</h3>
                    <p className="text-gray-600">We create custom solutions designed specifically for your business needs.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#3A6D8C] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#001F3F] mb-1">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous support and maintenance for all our solutions.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3A6D8C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our technical solutions can help your business grow and succeed in the digital landscape.
          </p>
          <Link to="/contact" className="bg-white text-[#001F3F] hover:bg-[#001F3F] hover:text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;