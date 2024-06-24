import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-line" />
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-link">© InvPerg {currentYear}</div>
          <div className="footer-link">Privacy policy</div>
          <div className="footer-link">Cookies policy</div>
          <div className="footer-link">Terms of use</div>
        </div>
          <div className="newsplace">
            <div className="updates-text">Newsletter</div>
            <div className="email-placeholder">Email Address</div>
            <div className="send-button">
            <div className="send-button-background" />
            <div className="send-button-text">Enviar</div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
