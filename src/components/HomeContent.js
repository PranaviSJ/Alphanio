import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import './HomeContent.css';

const HomeContent = () => {
  return (
    <div className="home-content-container">
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default HomeContent;
