import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

import ChatPage from './components/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <CallCentreSection />
            <LlmAndRectangleWrapper />
            <AgentAi />
            <Testimonial />
            <Partner /> 
            <Footer />
          </div>
        } />

        {/* Contact Page → Redirects to ChatPage */}
        <Route path="/contact" element={<ChatPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
