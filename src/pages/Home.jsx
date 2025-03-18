import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default Home; 