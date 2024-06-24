import React from 'react';
import './Pillarssection.css';

const PillarsSection: React.FC = () => {
  return (
    <div className="pillars-section">
      <div className="pillar">
        <img src="/public/image/news.jpg" alt="Noticias y Actualidad" className="pillar-icon"/>
        <h2>Noticias y Actualidad</h2>
        <p>Mantente informado con las últimas noticias y actualizaciones del mundo del trading.</p>
      </div>
      <div className="pillar">
        <img src="/public/image/trading-1.jpg" alt="Simulación de Portfolio" className="pillar-icon"/>
        <h2>Simulación de Portfolio</h2>
        <p>Simula y analiza tus inversiones con nuestra herramienta avanzada de portfolio.</p>
      </div>
      <div className="pillar">
        <img src="/public/image/trading-2.jpg" alt="Representantes Oficiales" className="pillar-icon"/>
        <h2>Representantes Oficiales</h2>
        <p>Somos representantes oficiales de Trading View. La mayor plataforma de trading del momento.</p>
      </div>
    </div>
  );
};

export default PillarsSection;
