import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ClientsSection from './components/ClientsSection';
import CallCentreSection from './components/CallCentreSection';
import { LlmAndRectangleWrapper } from "./components/LlmAndRectangle";
import AgentAi from './components/AgentAi';
import Testimonial from './components/Testimonial';
import Partner from './components/Partner'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ClientsSection />
      <CallCentreSection />
      <LlmAndRectangleWrapper />
      <AgentAi />
      <Testimonial />
      <Partner /> 
      <Footer />
    </div>
  );
}

export default App;
