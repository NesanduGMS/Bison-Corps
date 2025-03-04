import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#001F3F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or ready to start your project? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+11234567890" className="hover:text-[#3A6D8C]">(123) 456-7890</a>
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@techsolutions.com" className="hover:text-[#3A6D8C]">info@techsolutions.com</a>
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Address</h3>
              <p className="text-gray-600">
                123 Tech Street<br />
                Silicon Valley, CA 94043
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday<br />
                9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A6D8C]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A6D8C]"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A6D8C]"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A6D8C]"
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
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A6D8C]"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#3A6D8C] hover:bg-[#001F3F] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2 bg-[#001F3F] p-8 lg:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">How We Can Help</h2>
              <p className="mb-8">
                Our team of experts is ready to help you with all your technical needs. Here are some ways we can assist you:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#6A9AB0] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Project Consultation</h3>
                    <p className="text-gray-300">
                      Discuss your project ideas and get expert advice on the best approach.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#6A9AB0] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Technical Support</h3>
                    <p className="text-gray-300">
                      Get help with technical issues or questions about our services.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#6A9AB0] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Partnership Opportunities</h3>
                    <p className="text-gray-300">
                      Explore potential partnerships or collaboration opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#6A9AB0] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Career Inquiries</h3>
                    <p className="text-gray-300">
                      Learn about current job openings and career opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Our Location</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
            {/* In a real application, you would embed a Google Map or similar here */}
            <div className="w-full h-full flex items-center justify-center bg-[#6A9AB0] text-white">
              <p className="text-xl">Map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;