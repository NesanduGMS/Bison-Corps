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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
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
  
  // Animated background effect
  const [animationOffset, setAnimationOffset] = useState(0);
  
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationOffset(prev => (prev + 1) % 100);
    }, 100);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  // Form steps content
  const formSteps = [
    // Step 1: Contact Information
    <div key="step1" className="space-y-4">
      <h3 className="text-xl font-semibold text-amber-500">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-amber-500 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-amber-500 mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm"
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-amber-500 mb-1">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm"
            placeholder="Your Company Ltd."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-amber-500 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>
    </div>,
    
    // Step 2: Project Details
    <div key="step2" className="space-y-4">
      <h3 className="text-xl font-semibold text-amber-500">Project Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-amber-500 mb-1">Project Type *</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm"
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
        <div>
          <label className="block text-sm font-medium text-amber-500 mb-1">Budget Range</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm"
          >
            <option value="">Select budget range</option>
            <option value="below10k">Below $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="above100k">Above $100,000</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-amber-500 mb-1">Timeline</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm"
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
      <div>
        <label className="block text-sm font-medium text-amber-500 mb-1">Project Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-black text-white shadow-sm resize-none"
          placeholder="Tell us about your project requirements, goals, and specific needs..."
          required
        ></textarea>
      </div>
    </div>,
    
    // Step 3: Review & Submit
    <div key="step3" className="space-y-4">
      <h3 className="text-xl font-semibold text-amber-500">Review Your Information</h3>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div>
            <h4 className="text-sm font-semibold text-amber-500">Name</h4>
            <p className="text-white">{formData.name || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-500">Email</h4>
            <p className="text-white">{formData.email || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-500">Company</h4>
            <p className="text-white">{formData.company || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-500">Phone</h4>
            <p className="text-white">{formData.phone || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-500">Project Type</h4>
            <p className="text-white">{formData.projectType || "Not selected"}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-500">Budget</h4>
            <p className="text-white">{formData.budget || "Not selected"}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-500">Timeline</h4>
            <p className="text-white">{formData.timeline || "Not selected"}</p>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-amber-500">Project Description</h4>
          <p className="text-white whitespace-pre-line">{formData.description || "Not provided"}</p>
        </div>
      </div>
      <div className="text-sm text-amber-500">
        By submitting this form, you agree to our <a href="#" className="underline hover:text-amber-400">Terms of Service</a> and <a href="#" className="underline hover:text-amber-400">Privacy Policy</a>.
      </div>
    </div>
  ];

  return (
    <div className="min-h-screen bg-black py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-800"
          style={{
            backgroundSize: '400% 400%',
            backgroundPosition: `${animationOffset}% ${animationOffset}%`,
            transform: `rotate(${animationOffset / 10}deg) scale(1.5)`,
            opacity: 0.15
          }}
        ></div>
        <div className="absolute inset-0 bg-[#001F3F] opacity-80"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-amber-500 rounded-full blur-xl"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3,
              transform: `translateX(${Math.sin((animationOffset + i * 10) / 20) * 50}px) translateY(${Math.cos((animationOffset + i * 10) / 20) * 50}px)`
            }}
          ></div>
        ))}
      </div>
      
      {/* Header with geometric decoration */}
      <div className="relative mb-12 z-10">
        <div className="absolute inset-x-0 -bottom-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-gray-900">
            <path fill="currentColor" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">Get Your Custom Software Quote</h1>
          <p className="text-white max-w-2xl mx-auto">Tell us about your project and our team will create a tailored solution to meet your business needs</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {isSubmitted ? (
          <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-center border-2 border-amber-500">
            <div className="w-16 h-16 bg-amber-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-2xl font-bold text-amber-500 mb-4">Quote Request Submitted!</h2>
            <p className="text-white mb-6">Thank you for your interest in our services. Our team will review your project details and get back to you within 24-48 hours with a personalized quote.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-black text-amber-500 border border-amber-500 rounded-lg font-medium hover:bg-amber-500 hover:text-black transition duration-200"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800">
            {/* Progress indicator */}
            <div className="bg-gray-800 h-1">
              <div 
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${(currentStep + 1) * 33.33}%` }}
              ></div>
            </div>
            
            <div className="p-8">
              {/* Step indicator */}
              <div className="flex justify-between mb-8">
                {[0, 1, 2].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                        currentStep === step 
                          ? 'bg-amber-500 text-black' 
                          : currentStep > step 
                            ? 'bg-gray-800 text-amber-500 border border-amber-500' 
                            : 'bg-gray-800 text-gray-400 border border-gray-700'
                      }`}
                    >
                      {currentStep > step ? <Check className="w-5 h-5" /> : step + 1}
                    </div>
                    <span className={`text-xs mt-2 ${currentStep >= step ? 'text-amber-500' : 'text-gray-400'}`}>
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
                      onClick={prevStep}
                      className="px-5 py-2 bg-black text-amber-500 border border-amber-500 rounded-lg font-medium hover:bg-gray-800 transition duration-200 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
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
                      onClick={nextStep}
                      className="px-5 py-2 bg-amber-500 text-black rounded-lg font-medium hover:bg-amber-600 transition duration-200 flex items-center"
                    >
                      Next
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-2 bg-amber-500 text-black rounded-lg font-medium hover:bg-amber-600 transition duration-200 flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
                          Submit Quote Request
                          <ArrowRight className="w-5 h-5 ml-1" />
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
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-amber-500 group">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-amber-500 group-hover:bg-amber-500 transition-all duration-300">
              <Clock className="w-6 h-6 text-amber-500 group-hover:text-black transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-amber-500 mb-2">Fast Turnaround</h3>
            <p className="text-white">We respond to all quote requests within 24 hours with a detailed proposal tailored to your needs.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-amber-500 group">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-amber-500 group-hover:bg-amber-500 transition-all duration-300">
              <Code className="w-6 h-6 text-amber-500 group-hover:text-black transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-amber-500 mb-2">Custom Solutions</h3>
            <p className="text-white">Every software solution is built specifically for your business goals and technical requirements.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-amber-500 group">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-amber-500 group-hover:bg-amber-500 transition-all duration-300">
              <Shield className="w-6 h-6 text-amber-500 group-hover:text-black transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-amber-500 mb-2">Transparent Pricing</h3>
            <p className="text-white">No hidden fees or surprise costs. We provide clear, detailed pricing and milestone-based billing.</p>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16 bg-[#001F3F] rounded-xl shadow-lg p-8 text-white border border-amber-500">
          <h2 className="text-2xl font-bold mb-6 text-center text-amber-500">What Our Clients Say</h2>
          <div className="italic text-white text-center">
            "Working with this team was fantastic. They delivered our custom CRM solution on time and on budget. The software has helped us increase productivity by 35% in just three months."
          </div>
          <div className="mt-4 text-center">
            <p className="font-semibold text-amber-500">Sarah Johnson</p>
            <p className="text-sm text-white">CTO, TechAdvance Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;