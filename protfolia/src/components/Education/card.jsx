import React from 'react';
import './Card.css'; // Ensure this path is correct

const Card = ({ index }) => {
    const educationData = [
        {
            level: "10TH",
            collage: "Bhoruka English High School",
            aggregate: "85.12%",
            website: "https://www.edustoke.com/bengaluru/borukha-english-school-nelamangala",
            image: "https://www.edustoke.com/assets/uploads-new/borukha-english-school-1492425755-2.jpg"
        },
        {
            level: "12TH",
            collage: "Seshadripuram Composite PU College",
            aggregate: "81.5%",
            website: "https://www.scpucblr.ac.in/",
            image: "https://collegemarker.com/college/seshadripuram%20pu%20college%20bangalore.jpg"
        },
        {
            level: "UG (B.Tech CSE)",
            collage: "Presidency University",
            aggregate: "7.75 CGPA",
            website: "https://presidencyuniversity.in/",
            image: "https://presidencyuniversity.in/wp-content/uploads/2022/03/DSC_2991.jpg"
        }
    ];

    // Get the specific education data based on the index
    const edu = educationData[index];

    return (
        <div className="marker-details">
            <div className="card">
                <img src={edu.image} alt={`${edu.collage} logo`} className="card-image" />
                <div className="card-content">
                    <h3 className="card-title">{edu.level}</h3>
                    <p className="card-collage">{edu.collage}</p>
                    <p className="card-aggregate">Aggregate: {edu.aggregate}</p>
                    <a href={edu.website} target="_blank" rel="noopener noreferrer" className="card-link">
                        Visit Website
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
