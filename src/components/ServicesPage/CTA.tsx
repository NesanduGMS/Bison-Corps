import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500 rounded-full opacity-20 -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#001F3F] rounded-full opacity-20 translate-x-16 translate-y-16"></div>
      <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-amber-500 rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side with dark background */}
            <div className="md:w-2/5 bg-[#001F3F] p-8 text-white flex items-center justify-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                  Ready to
                  <span className="block text-amber-500">Get Started?</span>
                  <div className="w-16 h-1 bg-amber-500 mt-2"></div>
                </h2>
              </div>
            </div>
            
            {/* Right side with light background */}
            <div className="md:w-3/5 p-8">
              <p className="text-lg mb-8 text-black">
                Contact us today to discuss your project requirements and how our services can help your business succeed.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link 
                  to="/contact" 
                  className="group relative bg-[#001F3F] text-white font-semibold py-3 px-8 rounded-md overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">Contact Us</span>
                  <span className="absolute top-0 left-0 w-full h-0 bg-amber-500 transition-all duration-300 group-hover:h-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}