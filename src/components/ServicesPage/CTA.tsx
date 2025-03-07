import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <section className="py-16 bg-[#3A6D8C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and how our services can help your business succeed.
          </p>
          <Link to="/contact" className="bg-white text-[#001F3F] hover:bg-[#001F3F] hover:text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    );
  }
  