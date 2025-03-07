import Hero from '../components/ServicesPage/Hero';
import MainServices from '../components/ServicesPage/MainServices';
import AdditionalServices from '../components/ServicesPage/AdditionalServices';
import OurProcess from '../components/ServicesPage/OurProcess';
import CTA from '../components/ServicesPage/CTA';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero/>

      {/* Main Services */}
      <MainServices/>

      {/* Additional Services */}
      <AdditionalServices/>

      {/* Our Process */}
      <OurProcess/>

      {/* CTA Section */}
      <CTA/>
     
    </div>
  );
};

export default ServicesPage;