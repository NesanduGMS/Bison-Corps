import Hero from '../components/HomePage/Hero';
import Services from '../components/HomePage/Services';
import WhyChooseUs from '../components/HomePage/WhyChooseUs';
import CTA from '../components/HomePage/CTA';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <Services/>

      {/* Why Choose Us */}
      <WhyChooseUs/>

      {/* CTA Section */}
      <CTA/>
      
    </div>
  );
};

export default HomePage;