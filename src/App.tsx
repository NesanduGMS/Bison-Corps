import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import GetAQuote from './/pages/GetAQuote';  // Already imported
import Navbar from './components/Navbar';  // Already imported
import Footer from './components/Footer';  // Already imported
import './App.css';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
