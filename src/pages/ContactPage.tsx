import Hero from '../components/ContactPage/Hero';
import ContactInformation from '../components/ContactPage/ContactInformation';
import Map from '../components/ContactPage/Map';

const ContactPage = () => {

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Contact Information */}
      <ContactInformation />
      
      {/* Map Section */}
      <Map />
      
    </div>
  );
};

export default ContactPage;