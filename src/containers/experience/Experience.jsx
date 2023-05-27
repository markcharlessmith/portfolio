import React from 'react';
import { Article } from '../../components';
import { squril, timecroc, gitgood } from './imports';
import './experience.css';

const Experience = () => {
  return (
    <div className="mcs__experience section__padding" id="experience">
      <div className="mcs__experience-heading">
        <h1 className="gradient__text">
          Experience
        </h1>
        <h4 className="mcs__experience-subheading">
          I'm a software engineer working in React and Node.js/Express. I'm passionate about solving complex problems, collaborating with teams of engineers who want to work together to do great things, and blockchain technology. I'm an active contributor to the open-source community, and most recently co-created SQuriL, an open-source GraphQL schema generation and storage tool.
        </h4>
      </div>
      <div className="mcs__experience-container">
        <div className="mcs__experience-container_groupB">
          <Article imgUrl={squril} title="SQuriL" text="GraphQL schema generation and storage tool for PostgreSQL databases, supporting NodeJS and TypeScript environments" link="http://www.squril.io/" btnLink="https://github.com/oslabs-beta/SQuriL" />
          <Article imgUrl={timecroc} title="TimeCroc" text="Time clock application for employee data tracking and report generation" btnLink="https://github.com/TimeCroc/timecroc" />
          <Article imgUrl={gitgood} title="GitGood" text="Learning tool which enables users to store online resources in customizable categories" btnLink="https://github.com/GitGoodOrg/GitGood" />
        </div>
      </div>
    </div>
  )
}

export default Experience;
