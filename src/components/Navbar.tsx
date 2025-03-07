import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/Logo.png'; // Make sure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navbarClass = `
    fixed top-0 w-full z-40 transition-all duration-300
    ${scrolled 
      ? 'bg-white/95 backdrop-blur-sm shadow-lg py-4' 
      : 'bg-transparent py-6'}
  `;

  const linkClass = (path: string) => `
    relative px-4 py-2 rounded-md transition-all duration-300 text-lg font-medium
    ${location.pathname === path 
      ? 'text-amber-500 font-bold' 
      : scrolled ? 'text-[#001F3F]' : 'text-white'}
    hover:text-amber-500 group
  `;

  // Services dropdown items
  const serviceItems = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Mobile Apps', path: '/services/mobile-apps' },
    { name: 'UI/UX Design', path: '/services/design' },
  ];

  return (
    <nav className={navbarClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section with animation */}
          <Link 
    to="/" 
    className="flex items-center group"
>
    <div className="overflow-hidden rounded-full">
        <img 
            src={Logo} 
            alt="BISON Corps Logo" 
            className="h-14 w-auto" 
        />
    </div>
    <div className="ml-3 overflow-hidden">
        <span className="text-2xl font-bold relative inline-block">
            <span className={`transition-colors duration-300 ${scrolled ? 'text-[#001F3F]' : 'text-white'}`}>
                BISON
            </span>
            <span className="text-amber-500"> Corps</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
        </span>
    </div>
</Link>


          {/* Desktop Menu with hover effects */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              to="/" 
              className={linkClass('/')}
              onMouseEnter={() => setHoveredItem('home')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Home
              <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 transition-all duration-300 transform -translate-x-1/2 ${hoveredItem === 'home' || location.pathname === '/' ? 'w-3/4' : 'w-0'}`}></span>
            </Link>
            
            <Link 
              to="/about" 
              className={linkClass('/about')}
              onMouseEnter={() => setHoveredItem('about')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              About
              <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 transition-all duration-300 transform -translate-x-1/2 ${hoveredItem === 'about' || location.pathname === '/about' ? 'w-3/4' : 'w-0'}`}></span>
            </Link>
            
            {/* Services with dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredItem('services')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link 
                to="/services" 
                className={`${linkClass('/services')} flex items-center`}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredItem === 'services' ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 transition-all duration-300 transform -translate-x-1/2 ${hoveredItem === 'services' || location.pathname.includes('/services') ? 'w-3/4' : 'w-0'}`}></span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 -translate-y-2 z-50">
                <div className="py-1 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className={linkClass('/contact')}
              onMouseEnter={() => setHoveredItem('contact')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Contact
              <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 transition-all duration-300 transform -translate-x-1/2 ${hoveredItem === 'contact' || location.pathname === '/contact' ? 'w-3/4' : 'w-0'}`}></span>
            </Link>
            
            {/* CTA Button with increased margin */}
            <Link
              to="/quote"
              className="ml-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-md font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-amber-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button with animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${scrolled ? 'text-[#001F3F]' : 'text-white'} hover:text-amber-500`}
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-12" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-2 shadow-inner">
          <Link
            to="/"
            className="block px-4 py-3 rounded-md text-[#001F3F] hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 transform hover:-translate-x-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-3 rounded-md text-[#001F3F] hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 transform hover:-translate-x-1"
          >
            About
          </Link>
          
          {/* Services dropdown in mobile */}
          <div className="relative">
            <div 
              onClick={() => setHoveredItem(hoveredItem === 'mobileServices' ? null : 'mobileServices')}
              className="flex justify-between items-center px-4 py-3 rounded-md text-[#001F3F] hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${hoveredItem === 'mobileServices' ? 'rotate-180' : ''}`} />
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ${hoveredItem === 'mobileServices' ? 'max-h-60' : 'max-h-0'}`}>
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors duration-150"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link
            to="/contact"
            className="block px-4 py-3 rounded-md text-[#001F3F] hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 transform hover:-translate-x-1"
          >
            Contact
          </Link>
          
          {/* Mobile CTA */}
          <Link
            to="/quote"
            className="block mt-6 text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-3 rounded-md hover:shadow-md transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;