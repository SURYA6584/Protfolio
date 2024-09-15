import React, { useState, useRef, useEffect } from 'react';
import './Project.css';
import web1 from '../../images/web1.png'; // Import images for the slideshow
import web2 from '../../images/web2.png';
import web3 from '../../images/web3.png';
import web4 from '../../images/web4.png';
import web5 from '../../images/web5.png';
import web6 from '../../images/web6.png';
import web7 from '../../images/web7.png';
import web8 from '../../images/web8.png';
import fedup1 from '../../images/fedup1.jpg';
import fedup2 from '../../images/fedup2.jpg';
import fedup3 from '../../images/fedup3.jpg';
import fedup4 from '../../images/fedup4.jpg';
import fedup5 from '../../images/fedup5.jpg';
import fedup6 from '../../images/fedup6.jpg';
import fedup7 from '../../images/fedup7.jpg';
import prot1 from '../../images/prot1.png';
import prot2 from '../../images/prot2.png';
import prot3 from '../../images/prot3.png';
import prot4 from '../../images/prot4.png';
import prot5 from '../../images/prot5.png';
import prot6 from '../../images/prot6.png';

const Projects = () => {
  // Define your project data with an array of images
  const projects = [
    {
      title: 'GoChat',
      readme: "Developed an Android application with a dynamic splash screen for improved user engagement. Implemented OTP authentication using Firebase Authentication and real-time data management with Firebase Realtime Database. Integrated Google Maps API for location services and Gemini.AI for intelligent query handling. Showcased expertise in Android development, Firebase services, and API integration.",
      images: [fedup1, fedup2, fedup3, fedup4, fedup5, fedup6, fedup7], // Array of images for slideshow
    },
    {
      title: 'Online Food Delivery',
      readme: "Developed a comprehensive Online Food Delivery System with features for browsing restaurants, placing orders, and managing payments. Implemented user registration, login, order processing, and payment functionalities, enhancing user experience and system reliability.",
      images: [web1, web2, web3, web4, web5, web6, web7, web8],
    },
    {
      title: 'Protfolia',
      readme: "Protfolia is a portfolio management application designed to showcase.",
      images: [prot1, prot2, prot3, prot4, prot5, prot6],
    },
    // Add more projects as needed
  ];

  // State to keep track of which image to show for each project
  const [currentImageIndex, setCurrentImageIndex] = useState(
    new Array(projects.length).fill(0)
  );

  // State to track which project is being hovered over
  const [isHovered, setIsHovered] = useState(
    new Array(projects.length).fill(false)
  );

  // Refs to store intervals for each project
  const intervals = useRef([]);

  // Handle mouse enter to start slideshow
  const handleMouseEnter = (index) => {
    if (projects[index].images.length === 0) return; // Skip if no images

    setIsHovered((prev) => {
      const newHoveredState = [...prev];
      newHoveredState[index] = true;
      return newHoveredState;
    });

    const imageCount = projects[index].images.length;

    // Clear any existing interval
    if (intervals.current[index]) {
      clearInterval(intervals.current[index]);
    }

    // Start the slideshow
    intervals.current[index] = setInterval(() => {
      setCurrentImageIndex((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[index] = (newIndexes[index] + 1) % imageCount;
        return newIndexes;
      });
    }, 1000);
  };

  // Handle mouse leave to stop slideshow and show the first image
  const handleMouseLeave = (index) => {
    clearInterval(intervals.current[index]);
    setIsHovered((prev) => {
      const newHoveredState = [...prev];
      newHoveredState[index] = false;
      return newHoveredState;
    });

    setCurrentImageIndex((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] = 0; // Reset to the first image
      return newIndexes;
    });
  };

  // Clean up intervals on component unmount
  useEffect(() => {
    return () => {
      intervals.current.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className='project_container' id="Projects">
      <div className="heading">My Projects</div>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <div
            className="project-slide"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Display the starting image or the slideshow */}
            <img
              src={
                isHovered[index] && project.images.length > 0
                  ? project.images[currentImageIndex[index]]
                  : project.images[0] || 'defaultImage.png' // Show first image or a default if none exist
              }
              alt={`Project ${index + 1}`}
              width="100%"
              height="100%"
            />
            
            {/* Title and Description */}
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.readme}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
