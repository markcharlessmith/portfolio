import React from 'react';
import './header.css';
// import octopus from '../../assets/octopus.png';
import mark from '../../assets/mark.png';

const Header = () => {
  return (
    <div className="mcs__header section__padding" id="home">
      <div className="mcs__header-content">
        <h1 className="gradient__text">Mark Charles Smith</h1>
        <p>Los Angeles-based software engineer</p>
      </div>
        <div className="mcs__header-image">
          <img src={mark} alt="mark"/>
      </div>
    </div>
  )
}

export default Header;
