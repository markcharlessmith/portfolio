import React from 'react';
import './footer.css';
import mcs from '../../assets/mcs.png';
import octopus from '../../assets/octopus.png';

const Footer = () => {
  return (
    <div className="mcs__footer section__padding">
      <div className="mcs__footer-links">
        <div className="mcs__footer-links_logo">
          <img src={mcs} alt="logo" />
          <img src={octopus} alt="octopus" />
        </div>
       </div>
      <div className="mcs__footer-copyright">
        <p>© Copyright 2022 Mark Charles Smith. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
