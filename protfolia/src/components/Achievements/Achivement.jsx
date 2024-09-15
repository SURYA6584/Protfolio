import React, { useEffect } from 'react';
import './Achievement.css'; // Custom CSS for styling
import AOS from 'aos';
import 'aos/dist/aos.css';

// Achievement data array
const achievements = [
  {
    title: 'TCS Digital Selection',
    description: 'Successfully selected for TCS Digital with a competitive package.',
    date: 'August 2024',
    icon: '🏆',
  },
  {
    title: 'GATE Qualification',
    description: 'Qualified the prestigious GATE exam in Computer Science.',
    date: 'February 2024',
    icon: '🎓',
  },
  {
    title: 'React Web Development Project',
    description: 'Built and delivered a food delivery web application using React.js and Spring Boot.',
    date: 'July 2024',
    icon: '💻',
  },
];

const Achievement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); // Proper useEffect hook placement

  return (
    <section id="Achievments">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card" data-aos="fade-up">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <p className="achievement-date">{achievement.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
