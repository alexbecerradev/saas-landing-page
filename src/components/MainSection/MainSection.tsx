import React from 'react';
import './MainSection.css';

const MainSection: React.FC = () => {
  return (
    <div className="main-section">
      <div className="content">
        <h1>Transforma tus Decisiones Financieras</h1>
        <p>Potencia tu estrategia de trading con nuestras herramientas y análisis especializados.</p>
        <div className="action">
        <button className="get-started">Get started</button>
        </div>
      </div>
      <div className='containerpic'>
      <img src="./src/assets/image/main-pic.jpg" alt="placeholder" className="placeholder-image" />
      </div>
    </div>
  );
};

export default MainSection;
