import React from 'react';
import { Article } from '../../components';
import { squril, gitgood } from './imports';
import './experience.css';

const Experience = () => {
  return (
    <div className="mcs__experience section__padding" id="experience">
      <div className="mcs__experience-heading">
        <h1 className="gradient__text">
          Experience
        </h1>
        <h4 className="mcs__experience-subheading">
          I am a frequent contributor to the open source community.
        </h4>
      </div>
      <div className="mcs__experience-container">
         <div className="mcs__experience-container_groupB">
          <Article imgUrl={squril} title="SQuriL" text="GraphQL schema generation and storage tool for PostgreSQL databases, supporting NodeJS and TypeScript environments" link="http://www.squril.io/" btnLink="https://github.com/oslabs-beta/SQuriL" />
          <Article imgUrl={gitgood} title="GitGood" text="Learning tool which enables users to store online resources in customizable categories" btnLink="https://github.com/GitGoodOrg/GitGood" />
          </div>
      </div>
    </div>
  )
}

export default Experience;
