import React from "react";
import "./Skills.css";
import { FaCode } from "react-icons/fa";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-body primary">
          <div className="skill-header">
            <FaCode /> <span>Primary Skills</span>
          </div>
          <div className="skil-value">
            <p> - JavaScript (ES6)</p>
          </div>
          <div className="skil-value">
            <p> - HTML 5</p>
          </div>
          <div className="skil-value">
            <p> - CSS 3 (LESS with BEM, SCSS)</p>
          </div>
          <div className="skil-value">
            <p> - Typescript</p>
          </div>
          {/* <br/> */}
          <div className="skil-value">
            <p> - Angular 2+ (Angular Material, RxJs)</p>
          </div>
          <div className="skil-value">
            <p> - React (React Redux, Formik, Yup, Material-Ui)</p>
          </div>
        </div>
        <div className="skills-body secondary">
          <div className="skill-header">
            <FaCode /> <span>Other Skills</span>
          </div>
          <div className="skil-value">
            <p> - NodeJS</p>
          </div>
          <div className="skil-value">
            <p> - ExpressJS</p>
          </div>
          <div className="skil-value">
            <p> - MongoDb (Mongoose)</p>
          </div>
          <div className="skil-value">
            <p> - GIT (Bitbucket, Github)</p>
          </div>
          <div className="skil-value">
            <p> - Docker / Jenkins (Basics)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
