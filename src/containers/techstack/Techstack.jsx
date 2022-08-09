import React from 'react';
import { Feature } from '../../components';
import { react, nodejs, typescript, postgresql, mongodb, jest, redux, git } from './imports';

import './techstack.css';

const Techstack = () => {
  return (
    <div className="mcs__techstack section__padding" id="techstack"> 
      <div className="mcs__techstack-heading">
        <h1 className="gradient__text">Techstack</h1>
        <h4>Across the stack, I have worked with many different technologies to design, build, and maintain my projects.</h4>
      </div>
      <div className="mcs__techstack-container_group">
        <Feature title="React" text="" icon={react}/>
        <Feature title="Node/Express" text="" icon={nodejs}/>
        <Feature title="TypeScript" text="" icon={typescript}/>
        <Feature title="PostgreSQL" text="" icon={postgresql}/>
        <Feature title="MongoDB" text="" icon={mongodb}/>
        <Feature title="Jest" text="" icon={jest}/>
        <Feature title="Git" text="" icon={git}/>
        <Feature title="Redux" text="" icon={redux}/>
       </div>
    </div>
  )
}

export default Techstack;
