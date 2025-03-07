import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import React, { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Animated heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-500 opacity-50 transform -rotate-1"></span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">We're here to help you transform your ideas into reality.</p>
        </div>
        
        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <Phone size={24} />, title: "Phone", content: "(123) 456-7890", link: "tel:+11234567890" },
            { icon: <Mail size={24} />, title: "Email", content: "info@techsolutions.com", link: "mailto:info@techsolutions.com" },
            { icon: <MapPin size={24} />, title: "Address", content: "123 Tech Street, Silicon Valley, CA 94043" },
            { icon: <Clock size={24} />, title: "Business Hours", content: "Monday - Friday, 9:00 AM - 5:00 PM" }
          ].map((item, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#001F3F] p-6 rounded-lg border border-gray-800 shadow-lg h-full">
                <div className="bg-amber-500 text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center">
                  {item.link ? (
                    <a href={item.link} className="hover:text-amber-500 transition-colors duration-300">
                      {item.content}
                    </a>
                  ) : (
                    item.content
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact form */}
        <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="lg:w-1/2 p-8 lg:p-12 bg-gray-900">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-amber-500 mr-4"></span>
              Send Us a Message
            </h2>
            <p className="text-gray-400 mb-8">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
            
            {formSubmitted ? (
              <div className="bg-amber-500 bg-opacity-20 border border-amber-500 text-amber-500 px-4 py-3 rounded-lg mb-6 animate-pulse">
                Thank you for your message! We'll get back to you shortly.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300 appearance-none"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:translate-y-1 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 bg-[#001F3F] p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-500 opacity-10 rounded-full transform -translate-x-20 translate-y-20"></div>
            
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-amber-500 mr-4"></span>
              How We Can Help
            </h2>
            <p className="mb-10 text-gray-300">
              Our team of experts is ready to help you with all your technical needs. Here are some ways we can assist you:
            </p>
            
            <div className="space-y-8 relative z-10">
              {[
                { number: 1, title: "Project Consultation", description: "Discuss your project ideas and get expert advice on the best approach." },
                { number: 2, title: "Technical Support", description: "Get help with technical issues or questions about our services." },
                { number: 3, title: "Partnership Opportunities", description: "Explore potential partnerships or collaboration opportunities." },
                { number: 4, title: "Career Inquiries", description: "Learn about current job openings and career opportunities." }
              ].map((item, index) => (
                <div key={index} className="flex group">
                  <div className="flex-shrink-0 mr-6">
                    <div className="bg-black text-amber-500 p-2 rounded-lg w-12 h-12 flex items-center justify-center shadow-md border border-gray-800 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                      {item.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-500 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}