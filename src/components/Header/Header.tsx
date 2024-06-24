import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="../../src/assets/image/logo.png" alt="logotipo" />
      </div>
      <div className="actions">
        <div className="signup">Sign up</div>
        <div className="login">Log in</div>
      </div>
    </div>
  );
};

export default Header;
