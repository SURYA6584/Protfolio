import React, { useState } from 'react';
import './Education.css'; // Ensure this path is correct
import kid from '../../images/kid2_icon.jpg'; // Correct path
import teen from '../../images/PU_icon.jpg'; // Correct path
import men from '../../images/eng_icon.jpg'; // Correct path

import Card from './card';

const Education = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const logos = [
        kid,
        teen,
        men
        ];

    return (
        <div id="education" className="education">
            <h1 className="education-heading">EDUCATION</h1>
            <div className="horizontal-timeline">
                {logos.map((logo, index) => (
                    <div 
                        className="timeline-marker"
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <img src={logo} alt={`Marker ${index}`} className="marker-icon" />
                        {activeIndex === index && <Card index={index} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
