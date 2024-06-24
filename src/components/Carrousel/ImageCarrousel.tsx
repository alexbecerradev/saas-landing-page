import React from 'react';
import Slider from 'react-slick';
import './ImageCarrousel.css';

const logos = [
  '/assets/image/bank.svg',
  '/assets/image/bars.svg',
  '/assets/image/bitcoin.svg',
  '/assets/image/candles.svg',
  '/assets/image/money.svg',
  '/assets/image/stats.svg',
];

const ImageCarousel: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="slide">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
