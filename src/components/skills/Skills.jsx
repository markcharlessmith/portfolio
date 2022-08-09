import React from 'react';
import './skills.css';

const Skills = ({ title, icon }) => {
  return (
    <div className="mcs__techstack-container_skills">
      <div className="mcs__techstack-container_skills-header">
      {/* <div /> */}
      <h3>{title}</h3>
      </div>
      <div className="mcs__techstack-container_skills-image">
        <img src={icon} alt="icon"></img>
      </div>
    </div>
  )
}

export default Skills;
