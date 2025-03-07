import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Linkedin, ChevronRight, Globe, Zap } from 'lucide-react';
import Logo from '../assets/Logo2.png';  // Ensure correct path to logo

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Wave SVG divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#eff6ff"></path>
        </svg>
      </div>

      {/* Main footer content with black background */}
      <div className="bg-black text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Description section */}
            <div>
              <div className="flex items-center mb-8">
                <img src={Logo} alt="BISON Corps Logo" className="h-24 w-auto" />
                <span className="ml-3 text-2xl font-bold text-white">BISON Corps</span>
              </div>
              <p className="text-base leading-relaxed text-gray-300 py-2">
                Innovative tech solutions crafted with precision, offering web development, software services, and digital marketing to help businesses thrive in the digital age.
              </p>
            </div>

            {/* Quick Links section */}
            <div className="py-2">
              <h3 className="text-white font-semibold mb-8 text-xl relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Services', 'Contact Us'].map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="flex items-center hover:text-amber-500 transition-colors text-gray-300 text-lg"
                    >
                      <ChevronRight className="h-5 w-5 mr-2 text-amber-500" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info section */}
            <div className="py-2">
              <h3 className="text-white font-semibold mb-8 text-xl relative inline-block">
                Contact Info
                <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full"></span>
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-navy-blue bg-[#001F3F] flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="block text-base text-gray-400">Call Us</span>
                    <span className="block text-gray-300 text-lg">+94 71 373 7876</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-navy-blue bg-[#001F3F] flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="block text-base text-gray-400">Email</span>
                    <span className="block text-gray-300 text-lg">bisoncorps@gmail.com</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-navy-blue bg-[#001F3F] flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="block text-base text-gray-400">Website</span>
                    <span className="block text-gray-300 text-lg">www.bisoncorps.com</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter and Social Links */}
            <div className="py-2">
              <h3 className="text-white font-semibold mb-8 text-xl relative inline-block">
                Stay Connected
                <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full"></span>
              </h3>
              
              <div className="mb-8">
                <p className="mb-4 text-base text-gray-300">Subscribe to our newsletter for updates</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="py-3 px-4 w-full rounded-l-md focus:outline-none text-black bg-gray-200"
                  />
                  <button className="bg-amber-500 text-black py-3 px-4 rounded-r-md hover:bg-amber-400 transition-colors">
                    <Zap className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <h4 className="text-white font-medium mb-4 text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, url: "https://www.facebook.com/BisonCorp/" },
                  { icon: Instagram, url: "https://www.instagram.com/bison_corps/" },
                  { icon: Linkedin, url: "https://www.linkedin.com/company/bison-corps/" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-[#001F3F] flex items-center justify-center hover:bg-amber-500 transition-colors"
                  >
                    <social.icon className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navy blue copyright section */}
      <div className="bg-[#001F3F] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-base">
              &copy; {new Date().getFullYear()} BISON Corps. All rights reserved.
            </div>
            <div className="flex space-x-6 text-base">
              <Link to="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-amber-500 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;