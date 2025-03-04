import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-[#001F3F] text-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">TechSolutions</Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-[#6A9AB0] transition-colors">Home</Link>
              <Link to="/about" className="hover:text-[#6A9AB0] transition-colors">About</Link>
              <Link to="/services" className="hover:text-[#6A9AB0] transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-[#6A9AB0] transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#001F3F] py-4">
              <div className="container mx-auto px-4 flex flex-col space-y-4">
                <Link to="/" className="hover:text-[#6A9AB0] transition-colors" onClick={toggleMenu}>Home</Link>
                <Link to="/about" className="hover:text-[#6A9AB0] transition-colors" onClick={toggleMenu}>About</Link>
                <Link to="/services" className="hover:text-[#6A9AB0] transition-colors" onClick={toggleMenu}>Services</Link>
                <Link to="/contact" className="hover:text-[#6A9AB0] transition-colors" onClick={toggleMenu}>Contact</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-[#001F3F] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">TechSolutions</h3>
                <p className="text-sm">Providing innovative technical solutions for businesses worldwide since 2010.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm hover:text-[#6A9AB0] transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-sm hover:text-[#6A9AB0] transition-colors">About</Link></li>
                  <li><Link to="/services" className="text-sm hover:text-[#6A9AB0] transition-colors">Services</Link></li>
                  <li><Link to="/contact" className="text-sm hover:text-[#6A9AB0] transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm hover:text-[#6A9AB0] transition-colors">Software Development</a></li>
                  <li><a href="#" className="text-sm hover:text-[#6A9AB0] transition-colors">Cloud Solutions</a></li>
                  <li><a href="#" className="text-sm hover:text-[#6A9AB0] transition-colors">IT Consulting</a></li>
                  <li><a href="#" className="text-sm hover:text-[#6A9AB0] transition-colors">Cybersecurity</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <address className="not-italic text-sm">
                  <p>123 Tech Street</p>
                  <p>Silicon Valley, CA 94043</p>
                  <p className="mt-2">Email: info@techsolutions.com</p>
                  <p>Phone: (123) 456-7890</p>
                </address>
              </div>
            </div>
            <div className="border-t border-[#3A6D8C] mt-8 pt-4 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;