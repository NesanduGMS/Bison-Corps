import React from 'react';
import Hero from '../components/AboutPage/Hero';
import OurStory from '../components/AboutPage/OurStory';
import OurValues from '../components/AboutPage/OurValues';
import OurTeam from '../components/AboutPage/OurTeam';
import StatsSection from '../components/AboutPage/StatsSection';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Our Story */}
      <OurStory />

      {/* Our Values */}
      <OurValues />

      {/* Our Team */}
      <OurTeam />

      {/* Stats Section */}
      <StatsSection />
      
    </div>
  );
};

export default AboutPage;