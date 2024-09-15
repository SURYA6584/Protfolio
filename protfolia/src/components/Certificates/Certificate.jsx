import React, { useState, useEffect, useRef } from 'react';
import './Certificate.css'; // Import the CSS file for styling
import java from '../../images/java.png'; // Correct path
import java2 from '../../images/java2.png'; // Correct path
import frontend from '../../images/frontend.png'; // Correct path
import Reactjs from '../../images/Reactjs.png'; // Correct path
import SpringBoot from '../../images/SpringBoot.png'; // Correct path

const certificates = [
  {
    imageUrl: java,
    altText: 'Certificate 1',
  },
  {
    imageUrl: java2,
    altText: 'Certificate 2',
  },
  {
    imageUrl: frontend,
    altText: 'Certificate 3',
  },
  {
    imageUrl: Reactjs,
    altText: 'Certificate 4',
  },
  {
    imageUrl: SpringBoot,
    altText: 'Certificate 5',
  },
];

const Certificate = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Calculate which certificate is in view when scrolling
  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstChild.offsetWidth + 20; // 20px gap between cards
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="certificate" id="certificate">
      <h3 className="cert_heading">CERTIFICATES</h3>
      <div className="certificate-container" ref={containerRef}>
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <img
              src={certificate.imageUrl}
              alt={certificate.altText}
              className="certificate-image"
            />
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="dots-container">
        {certificates.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificate;
