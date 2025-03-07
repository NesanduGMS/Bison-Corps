import { Code, Cloud, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MainServices() {
    return (
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
    );
  }
  