import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import GetAQuote from './pages/GetAQuote';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.css';

// Create a wrapper component to access the useLocation hook
const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Handle initial page load
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Show loading screen when route changes
  useEffect(() => {
    // Skip first render (initial load)
    if (location.key) {
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      {isLoading && <Loading />}
      <div className="min-h-screen bg-white flex flex-col justify-between">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<GetAQuote />} />
          </Routes>
        </main>
        
        {/* Footer Component */}
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;