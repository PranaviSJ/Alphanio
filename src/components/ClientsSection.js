import React from 'react';
import './ClientsSection.css';
import clientsImage from '../assets/Clients.png';

const ClientsSection = () => {
  return (
    <div className="clients-section">
      <div className="clients-scroll">
        {/* duplicate for seamless loop */}
        <img src={clientsImage} alt="Our Clients" className="clients-image" />
        <img src={clientsImage} alt="Our Clients" className="clients-image" />
        
      </div>
    </div>
  );
};

export default ClientsSection;
