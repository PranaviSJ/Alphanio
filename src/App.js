import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CallCentreSection from './components/CallCentreSection';
import { LlmAndRectangleWrapper } from "./components/LlmAndRectangle";
import AgentAi from './components/AgentAi';
import Testimonial from './components/Testimonial';
import Partner from './components/Partner'; 
import Footer from './components/Footer';

import ChatPage from './components/ChatPage';
import AssistantBot from './components/AssistantBot';  
import Contact from './components/Contact';

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

            {/* Floating Assistant Bot */}
            <AssistantBot />  
          </div>
        } />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
