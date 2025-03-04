import React from 'react';
import { Code, Cloud, Shield, Users, Database, Monitor, Server, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#001F3F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive technical solutions designed to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Core Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our primary service offerings that help businesses transform through technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card flex">
              <div className="flex-shrink-0 mr-6">
                <div className="bg-[#3A6D8C] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Code size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#001F3F] mb-3">Software Development</h3>
                <p className="text-gray-600 mb-4">
                  We create custom software solutions tailored to your specific business needs, from web applications to enterprise systems.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Custom web application development</li>
                  <li>• Enterprise software solutions</li>
                  <li>• API development and integration</li>
                  <li>• Legacy system modernization</li>
                </ul>
                <Link to="/contact" className="text-[#3A6D8C] font-medium hover:text-[#001F3F]">
                  Request a consultation
                </Link>
              </div>
            </div>
            
            <div className="card flex">
              <div className="flex-shrink-0 mr-6">
                <div className="bg-[#3A6D8C] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Cloud size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#001F3F] mb-3">Cloud Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Leverage the power of cloud computing with our comprehensive cloud services, from migration to management.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Cloud migration and strategy</li>
                  <li>• Cloud infrastructure setup and management</li>
                  <li>• Serverless architecture implementation</li>
                  <li>• Cloud cost optimization</li>
                </ul>
                <Link to="/contact" className="text-[#3A6D8C] font-medium hover:text-[#001F3F]">
                  Request a consultation
                </Link>
              </div>
            </div>
            
            <div className="card flex">
              <div className="flex-shrink-0 mr-6">
                <div className="bg-[#3A6D8C] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Users size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#001F3F] mb-3">IT Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Our expert consultants provide strategic guidance to help you make informed technology decisions.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• IT strategy development</li>
                  <li>• Technology roadmap planning</li>
                  <li>• Digital transformation consulting</li>
                  <li>• IT infrastructure assessment</li>
                </ul>
                <Link to="/contact" className="text-[#3A6D8C] font-medium hover:text-[#001F3F]">
                  Request a consultation
                </Link>
              </div>
            </div>
            
            <div className="card flex">
              <div className="flex-shrink-0 mr-6">
                <div className="bg-[#3A6D8C] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Shield size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#001F3F] mb-3">Cybersecurity</h3>
                <p className="text-gray-600 mb-4">
                  Protect your business from cyber threats with our comprehensive security solutions and services.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Security assessment and auditing</li>
                  <li>• Vulnerability management</li>
                  <li>• Security monitoring and incident response</li>
                  <li>• Employee security awareness training</li>
                </ul>
                <Link to="/contact" className="text-[#3A6D8C] font-medium hover:text-[#001F3F]">
                  Request a consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Specialized Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Additional specialized services to address specific technical needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Data Analytics</h3>
              <p className="text-gray-600">
                Transform your data into actionable insights with our advanced analytics solutions.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Monitor size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Create intuitive, engaging user experiences that delight your customers.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">DevOps</h3>
              <p className="text-gray-600">
                Streamline your development and operations with our DevOps practices.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Mobile Development</h3>
              <p className="text-gray-600">
                Build powerful, user-friendly mobile applications for iOS and Android.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Process</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We follow a proven methodology to ensure successful project delivery and client satisfaction.
          </p>
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#6A9AB0]"></div>
            
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold text-[#001F3F] mb-2">Discovery</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business, goals, and requirements through in-depth discussions and analysis.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="bg-[#3A6D8C] text-white rounded-full w-12 h-12 flex items-center justify-center z-10">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Discovery phase" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Planning phase" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-12 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                  <div className="bg-[#3A6D8C] text-white rounded-full w-12 h-12 flex items-center justify-center z-10">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                  <h3 className="text-2xl font-semibold text-[#001F3F] mb-2">Planning</h3>
                  <p className="text-gray-600">
                    We develop a detailed project plan, including timelines, milestones, and resource allocation.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold text-[#001F3F] mb-2">Development</h3>
                  <p className="text-gray-600">
                    Our expert team executes the plan, building your solution with regular updates and feedback cycles.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="bg-[#3A6D8C] text-white rounded-full w-12 h-12 flex items-center justify-center z-10">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Development phase" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Deployment phase" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-12 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                  <div className="bg-[#3A6D8C] text-white rounded-full w-12 h-12 flex items-center justify-center z-10">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                  <h3 className="text-2xl font-semibold text-[#001F3F] mb-2">Deployment & Support</h3>
                  <p className="text-gray-600">
                    We carefully deploy your solution and provide ongoing support and maintenance to ensure long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3A6D8C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and how our services can help your business succeed.
          </p>
          <Link to="/contact" className="bg-white text-[#001F3F] hover:bg-[#001F3F] hover:text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;