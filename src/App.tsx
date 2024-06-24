import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';
import ImageCarrousel from './components/Carrousel/ImageCarrousel';
import PillarsSection from './components/PillarSection/PillarsSection';
import ContactSection from './components/Contact/ContactSection';
// En index.tsx o App.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <ImageCarrousel />
      <PillarsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
