import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BrandCarousel.css'; // Archivo CSS para estilos personalizados

const brands = [
  { src: 'https://dojiw2m9tvv09.cloudfront.net/86841/brand/S_logitech-logo-249798.png?61&time=1719495525', alt: 'Logitech' },
  { src: 'https://dojiw2m9tvv09.cloudfront.net/86841/brand/S_redragon-logo-19913.png?61&time=1719495525', alt: 'Redragon' },
  { src: 'https://dojiw2m9tvv09.cloudfront.net/86841/brand/S_2021-logo-tdagger-wr5141.png?61&time=1719495525', alt: 'T-Dagger' },
  { src: 'https://dojiw2m9tvv09.cloudfront.net/86841/brand/S_descarga-4-removebg-preview7754.png?61&time=1719495525', alt: 'Fifine' },
  { src: 'https://dojiw2m9tvv09.cloudfront.net/86841/brand/S_descarga-5-removebg-preview9360.png?61&time=1719495525', alt: 'Streamplify' },
  { src: 'https://dojiw2m9tvv09.cloudfront.net/86841/brand/S_aerocool-logo4772.png?61&time=1719495525', alt: 'Aerocool' },
  { src: 'https://dojiw2m9tvv09.cloudfront.net/86841/brand/S_thunderx3-0-removebg-preview7177.png?61&time=1719495525', alt: 'ThunderX3' },
  { src: 'https://dojiw2m9tvv09.cloudfront.net/86841/brand/S_auriculares-bluetooth-edgebudspro-earphone-negro-klip-xtreme-kte-750bk-removebg-preview1549.png?61&time=1719495525', alt: 'Klip Xtreme' },
  { src: 'https://dojiw2m9tvv09.cloudfront.net/86841/brand/S_msi-logo-19722.png?61&time=1719495525', alt: 'MSI' }
];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: 'block', left: '-15px', zIndex: '1', }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: 'block', right: '-15px', zIndex: '1', }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="brand-carousel-container">
      <h2 className="text-center">MARCAS</h2>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="brand-slide">
            <img src={brand.src} alt={brand.alt} className="brand-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
