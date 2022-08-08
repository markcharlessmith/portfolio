import React from 'react';
import './feature.css';

const Feature = ({ title, icon }) => {
  return (
    <div className="mcs__features-container__feature">
      <div className="mcs__features-container__feature-title">
      <div />
      <h1>{title}</h1>
      </div>
      <div className="mcs__features-container_feature-text">
        <img src={icon} alt="icon"></img>
      </div>
    </div>
  )
}

export default Feature;
