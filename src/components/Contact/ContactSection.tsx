import React from 'react';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import './ContactSection.css';

const ConsultasSection: React.FC = () => {
  return (
    <div className="consultas-section">
      <div className="consultas-content">
        <h2>¿Consultas? Estamos online!</h2>
        <p>Contacta con nosotros a través de nuestras redes sociales:</p>
        <div className="social-icons">
          <FaTwitter className="icon" />
          <FaFacebookF className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ConsultasSection;
