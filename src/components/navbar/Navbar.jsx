import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiGithubFill, RiLinkedinBoxFill, RiSpotifyFill } from 'react-icons/ri';
import mcs from '../../assets/mcs.png';
import resume from '../../assets/MarkCharlesSmithResume.pdf';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mcs__navbar">
      <div className="mcs__navbar-links">
        <div className="mcs__navbar-links_logo">
          <img src={mcs} alt="logo"/>
        </div>
        <div className="mcs__navbar-links_container">
          <p><a href="#techstack">Techstack</a></p>
          <p><a href="#experience">Experience</a></p>
          <p><a href={resume} download>Resume</a></p>
          {/* <p><a href="https://www.markcharlessmith.com">Music</a></p> */}
        </div>
      <div className="mcs__navbar-links_icons">
        <a href="https://github.com/markcharlessmith" target="_blank" rel="noreferrer">
          <RiGithubFill size='40' />
          </a>
        <a href="https://www.linkedin.com/in/mark-charles-smith" target="_blank" rel="noreferrer">
          <RiLinkedinBoxFill size='40' />
        </a>
        <a href="https://open.spotify.com/artist/3ahbNzDONGv1c0cZFO1IA4" target="blank" rel="nonreferrer">
          <RiSpotifyFill size='40' />
        </a>
      </div>
      </div>
      <div className="mcs__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="mcs__navbar-menu_container scale-up-center">
          <div className="mcs__navbar-menu_container-links">
          <p><a href="#techstack">Techstack</a></p>
          <p><a href="#experience">Experience</a></p>
          <p><a href={resume} download>Resume</a></p>
          {/* <p><a href="https://www.markcharlessmith.com">Music</a></p> */}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;