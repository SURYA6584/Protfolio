import React, { useState } from 'react';
import './Skill.css'; // Import the CSS file

const Skill = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track the hovered card

  const rolesData = [
    {
      role: 'Backend Developer',
      skills: [
        { name: 'Java', icon: 'fab fa-java', rating: '70%' },
        { name: 'Spring Boot', icon: 'fas fa-leaf', rating: '60%' },
        { name: 'MySQL', icon: 'fas fa-database', rating: '80%' },
        { name: 'REST APIs', icon: 'fas fa-network-wired', rating: '65%' }
      ],
      objective: 'Build scalable and efficient server-side applications.',
      icon: 'fas fa-server',
    },
    {
      role: 'Frontend Developer',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5', rating: '90%' },
        { name: 'CSS', icon: 'fab fa-css3-alt', rating: '85%' },
        { name: 'JavaScript', icon: 'fab fa-js', rating: '70%' },
        { name: 'React.js', icon: 'fab fa-react', rating: '75%' }
      ],
      objective: 'Create stunning and responsive user interfaces.',
      icon: 'fas fa-laptop-code',
    },
    {
      role: 'Fullstack Developer',
      skills: [
        { name: 'Java', icon: 'fab fa-java', rating: '70%' },
        { name: 'Spring Boot', icon: 'fas fa-leaf', rating: '60%' },
        { name: 'HTML', icon: 'fab fa-html5', rating: '90%' },
        { name: 'React.js', icon: 'fab fa-react', rating: '75%' }
      ],
      objective: 'Manage both frontend and backend seamlessly.',
      icon: 'fas fa-cogs',
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredCard(index); // Set the hovered card index
  };

  const handleMouseLeave = () => {
    setHoveredCard(null); // Reset the hovered card when the mouse leaves
  };

  return (
    <div id="Skills" className='container'>
      <div className="role_heading">ROLES & SKILLS</div>
      <div className="skills-container">
        {rolesData.map((role, index) => (
          <div
            key={index}
            className="skill_cont_box"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`skill-card ${hoveredCard === index ? 'hovered' : ''}`}>
              <div className="skill-content">
                <div className="icon">
                  <i className={role.icon}></i>
                </div>
                <h3 className="role_name">{role.role}</h3>
              </div>

              <div className="skills-list">
                {role.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-icon">
                      <i className={skill.icon}></i>
                    </span>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-rating">
                      <div className="rating-bar">
                        <div
                          className={`rating-fill ${hoveredCard === index ? 'animated' : ''}`}
                          style={{
                            width: hoveredCard === index ? skill.rating : '0%',
                          }} // Smoothly animate from 0% to the actual percentage
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
