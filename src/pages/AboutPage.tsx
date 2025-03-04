import React from 'react';
import { Award, Clock, Target, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#001F3F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TechSolutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to helping businesses succeed through innovative technical solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="section-heading">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, TechSolutions began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of three passionate developers has grown into a comprehensive technical solutions provider with over 100 employees serving clients worldwide.
              </p>
              <p className="text-gray-700 mb-4">
                Throughout our journey, we've remained committed to our core values of innovation, excellence, and client satisfaction. We believe that technology should be an enabler, not a barrier, and we work tirelessly to create solutions that are both powerful and user-friendly.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be a trusted partner to businesses of all sizes, from startups to Fortune 500 companies, helping them navigate the complex world of technology and emerge stronger, more efficient, and ready for the future.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Our team" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Core Values</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            These principles guide everything we do and help us deliver exceptional results for our clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-[#3A6D8C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from code quality to client communication.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#3A6D8C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and approaches to solve complex problems creatively.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#3A6D8C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical standards in all our interactions.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#3A6D8C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, meeting deadlines and exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Leadership Team</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Meet the experienced professionals who guide our company's vision and strategy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="John Smith" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#001F3F] mb-1">John Smith</h3>
              <p className="text-[#3A6D8C] font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600">
                With over 20 years of experience in the tech industry, John leads our company with vision and expertise.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" 
                alt="Sarah Johnson" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#001F3F] mb-1">Sarah Johnson</h3>
              <p className="text-[#3A6D8C] font-medium mb-3">Chief Technology Officer</p>
              <p className="text-gray-600">
                Sarah drives our technical strategy and ensures we stay at the cutting edge of technology.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Michael Chen" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#001F3F] mb-1">Michael Chen</h3>
              <p className="text-[#3A6D8C] font-medium mb-3">Chief Operations Officer</p>
              <p className="text-gray-600">
                Michael oversees our day-to-day operations, ensuring we deliver exceptional service to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#6A9AB0] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">Clients Worldwide</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,000+</div>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-lg">Team Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;