import { useState, useEffect } from 'react';
import { ArrowRight, Check, Clock, Shield, Code } from 'lucide-react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);
  
  // Handle step transitions with animation
  const handleStepChange = (direction) => {
    setAnimateIn(false);
    setTimeout(() => {
      if (direction === 'next' && currentStep < 2) {
        setCurrentStep(prev => prev + 1);
      } else if (direction === 'prev' && currentStep > 0) {
        setCurrentStep(prev => prev - 1);
      }
      setAnimateIn(true);
    }, 300);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  // Form steps content
  const formSteps = [
    // Step 1: Contact Information
    <div key="step1" className={`space-y-4 transition-all duration-500 ${animateIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      <h3 className="text-xl font-semibold text-amber-500 relative overflow-hidden before:absolute before:bottom-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-amber-500 before:transition hover:before:scale-x-100 inline-block pb-1">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="transform transition duration-300 hover:scale-102">
          <label className="block text-sm font-medium text-amber-500 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm transition-all duration-300 hover:border-amber-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="transform transition duration-300 hover:scale-102">
          <label className="block text-sm font-medium text-amber-500 mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm transition-all duration-300 hover:border-amber-500"
            placeholder="you@company.com"
            required
          />
        </div>
        <div className="transform transition duration-300 hover:scale-102">
          <label className="block text-sm font-medium text-amber-500 mb-1">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm transition-all duration-300 hover:border-amber-500"
            placeholder="Your Company Ltd."
          />
        </div>
        <div className="transform transition duration-300 hover:scale-102">
          <label className="block text-sm font-medium text-amber-500 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm transition-all duration-300 hover:border-amber-500"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>
    </div>,
    
    // Step 2: Project Details
    <div key="step2" className={`space-y-4 transition-all duration-500 ${animateIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      <h3 className="text-xl font-semibold text-amber-500 relative overflow-hidden before:absolute before:bottom-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-amber-500 before:transition hover:before:scale-x-100 inline-block pb-1">Project Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="transform transition duration-300 hover:scale-102">
          <label className="block text-sm font-medium text-amber-500 mb-1">Project Type *</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm transition-all duration-300 hover:border-amber-500"
            required
          >
            <option value="">Select project type</option>
            <option value="web">Web Application</option>
            <option value="mobile">Mobile App</option>
            <option value="desktop">Desktop Software</option>
            <option value="saas">SaaS Platform</option>
            <option value="ai">AI/ML Solution</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="transform transition duration-300 hover:scale-102">
          <label className="block text-sm font-medium text-amber-500 mb-1">Budget Range</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm transition-all duration-300 hover:border-amber-500"
          >
            <option value="">Select budget range</option>
            <option value="below10k">Below $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="above100k">Above $100,000</option>
          </select>
        </div>
        <div className="transform transition duration-300 hover:scale-102">
          <label className="block text-sm font-medium text-amber-500 mb-1">Timeline</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm transition-all duration-300 hover:border-amber-500"
          >
            <option value="">Select timeline</option>
            <option value="urgent">ASAP (1-2 weeks)</option>
            <option value="short">Short (1-2 months)</option>
            <option value="medium">Medium (3-6 months)</option>
            <option value="long">Long-term (6+ months)</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div className="transform transition duration-300 hover:scale-102">
        <label className="block text-sm font-medium text-amber-500 mb-1">Project Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm resize-none transition-all duration-300 hover:border-amber-500"
          placeholder="Tell us about your project requirements, goals, and specific needs..."
          required
        ></textarea>
      </div>
    </div>,
    
    // Step 3: Review & Submit
    <div key="step3" className={`space-y-4 transition-all duration-500 ${animateIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      <h3 className="text-xl font-semibold text-amber-500 relative overflow-hidden before:absolute before:bottom-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-amber-500 before:transition hover:before:scale-x-100 inline-block pb-1">Review Your Information</h3>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800 transform transition duration-300 hover:shadow-amber-500/20 hover:border-amber-500/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="transition duration-300 hover:translate-x-1">
            <h4 className="text-sm font-semibold text-amber-500">Name</h4>
            <p className="text-white">{formData.name || "Not provided"}</p>
          </div>
          <div className="transition duration-300 hover:translate-x-1">
            <h4 className="text-sm font-semibold text-amber-500">Email</h4>
            <p className="text-white">{formData.email || "Not provided"}</p>
          </div>
          <div className="transition duration-300 hover:translate-x-1">
            <h4 className="text-sm font-semibold text-amber-500">Company</h4>
            <p className="text-white">{formData.company || "Not provided"}</p>
          </div>
          <div className="transition duration-300 hover:translate-x-1">
            <h4 className="text-sm font-semibold text-amber-500">Phone</h4>
            <p className="text-white">{formData.phone || "Not provided"}</p>
          </div>
          <div className="transition duration-300 hover:translate-x-1">
            <h4 className="text-sm font-semibold text-amber-500">Project Type</h4>
            <p className="text-white">{formData.projectType || "Not selected"}</p>
          </div>
          <div className="transition duration-300 hover:translate-x-1">
            <h4 className="text-sm font-semibold text-amber-500">Budget</h4>
            <p className="text-white">{formData.budget || "Not selected"}</p>
          </div>
          <div className="transition duration-300 hover:translate-x-1">
            <h4 className="text-sm font-semibold text-amber-500">Timeline</h4>
            <p className="text-white">{formData.timeline || "Not selected"}</p>
          </div>
        </div>
        <div className="mt-4 transition duration-300 hover:translate-x-1">
          <h4 className="text-sm font-semibold text-amber-500">Project Description</h4>
          <p className="text-white whitespace-pre-line">{formData.description || "Not provided"}</p>
        </div>
      </div>
      <div className="text-sm text-amber-500">
        By submitting this form, you agree to our <a href="#" className="relative after:absolute after:bg-amber-500 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Terms of Service</a> and <a href="#" className="relative after:absolute after:bg-amber-500 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Privacy Policy</a>.
      </div>
    </div>
  ];

  return (
    <div className="min-h-screen py-12 pt-32 bg-gradient-to-t from-blue-50 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-20 h-20 bg-amber-500 rounded-full opacity-10 top-1/4 left-1/4 animate-float"></div>
        <div className="absolute w-32 h-32 bg-amber-500 rounded-full opacity-5 top-3/4 right-1/3 animate-float-delayed"></div>
        <div className="absolute w-16 h-16 bg-blue-500 rounded-full opacity-10 top-2/3 left-1/3 animate-float-slow"></div>
        <div className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-5 bottom-1/4 right-1/4 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="mb-12">
          <div className="text-center" data-aos="fade-down">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-500 mb-2 animate-gradient-text">Get Your Custom Software Quote</h1>
            <p className="text-white max-w-2xl mx-auto transition-all duration-500 animate-fade-in">Tell us about your project and our team will create a tailored solution to meet your business needs</p>
          </div>
        </div>
        
        {isSubmitted ? (
          <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-center border-2 border-amber-500 animate-fade-in">
            <div className="w-16 h-16 bg-amber-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Check className="w-8 h-8 text-amber-500 animate-success" />
            </div>
            <h2 className="text-2xl font-bold text-amber-500 mb-4">Quote Request Submitted!</h2>
            <p className="text-white mb-6">Thank you for your interest in our services. Our team will review your project details and get back to you within 24-48 hours with a personalized quote.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-black text-amber-500 border border-amber-500 rounded-lg font-medium hover:bg-amber-500 hover:text-black transition duration-300 transform hover:scale-105"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 transition-all duration-500 hover:shadow-amber-500/30 animate-fade-in">
            {/* Progress indicator */}
            <div className="bg-gray-800 h-1">
              <div 
                className="bg-amber-500 h-full transition-all duration-700 ease-in-out"
                style={{ width: `${(currentStep + 1) * 33.33}%` }}
              ></div>
            </div>
            
            <div className="p-8">
              {/* Step indicator */}
              <div className="flex justify-between mb-8">
                {[0, 1, 2].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-500 ${
                        currentStep === step 
                          ? 'bg-amber-500 text-black scale-110 shadow-lg shadow-amber-500/50' 
                          : currentStep > step 
                            ? 'bg-gray-800 text-amber-500 border border-amber-500' 
                            : 'bg-gray-800 text-gray-400 border border-gray-700'
                      }`}
                    >
                      {currentStep > step ? <Check className="w-5 h-5 animate-success" /> : step + 1}
                    </div>
                    <span className={`text-xs mt-2 transition-all duration-500 ${currentStep >= step ? 'text-amber-500' : 'text-gray-400'}`}>
                      {step === 0 ? 'Contact' : step === 1 ? 'Project' : 'Review'}
                    </span>
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleSubmit}>
                {/* Current step content */}
                {formSteps[currentStep]}
                
                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 0 ? (
                    <button 
                      type="button"
                      onClick={() => handleStepChange('prev')}
                      className="px-5 py-2 bg-black text-amber-500 border border-amber-500 rounded-lg font-medium hover:bg-gray-800 transition duration-300 flex items-center group transform hover:translate-x-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < 2 ? (
                    <button
                      type="button"
                      onClick={() => handleStepChange('next')}
                      className="px-5 py-2 bg-amber-500 text-black rounded-lg font-medium hover:bg-amber-600 transition duration-300 flex items-center relative overflow-hidden group transform hover:translate-x-1"
                    >
                      <span className="relative z-10 flex items-center">
                        Next
                        <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-0 bg-black opacity-20 transition-all duration-300 group-hover:h-full"></span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-2 bg-amber-500 text-black rounded-lg font-medium hover:bg-amber-600 transition duration-300 flex items-center relative overflow-hidden group transform hover:translate-x-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <span className="relative z-10 flex items-center">
                            Submit Quote Request
                            <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                          <span className="absolute bottom-0 left-0 w-full h-0 bg-black opacity-20 transition-all duration-300 group-hover:h-full"></span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Features section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 border border-gray-800 hover:border-amber-500 group transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-amber-500 group-hover:bg-amber-500 transition-all duration-300 group-hover:scale-110">
              <Clock className="w-6 h-6 text-amber-500 group-hover:text-black transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-amber-500 mb-2 relative">
              <span className="relative z-10">Fast Turnaround</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-white group-hover:text-gray-200 transition-colors duration-300">We respond to all quote requests within 24 hours with a detailed proposal tailored to your needs.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 border border-gray-800 hover:border-amber-500 group transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-amber-500 group-hover:bg-amber-500 transition-all duration-300 group-hover:scale-110">
              <Code className="w-6 h-6 text-amber-500 group-hover:text-black transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-amber-500 mb-2 relative">
              <span className="relative z-10">Custom Solutions</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-white group-hover:text-gray-200 transition-colors duration-300">Every software solution is built specifically for your business goals and technical requirements.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 border border-gray-800 hover:border-amber-500 group transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-amber-500 group-hover:bg-amber-500 transition-all duration-300 group-hover:scale-110">
              <Shield className="w-6 h-6 text-amber-500 group-hover:text-black transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-amber-500 mb-2 relative">
              <span className="relative z-10">Transparent Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-white group-hover:text-gray-200 transition-colors duration-300">No hidden fees or surprise costs. We provide clear, detailed pricing and milestone-based billing.</p>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes floatDelayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulseSlow {
          0% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.1); opacity: 0.1; }
          100% { transform: scale(1); opacity: 0.05; }
        }
        
        @keyframes gradientText {
          0% { color: #f59e0b; }
          50% { color: #fbbf24; }
          100% { color: #f59e0b; }
        }
        
        @keyframes success {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
        
        .animate-gradient-text {
          animation: gradientText 3s ease-in-out infinite;
        }
        
        .animate-success {
          animation: success 0.5s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default GetQuote;