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
            <ul>
              <li>JavaScript (ES6) </li>
              <li>HTML 5</li>
              <li>CSS 3 (LESS, SCSS) with BEM</li>
              <li>Typescript</li>
            </ul>
            <h4>Framework/Library</h4>
            <ul>
              <li>Angular 2+</li>
              <li>React (Redux, React Query Formik, Yup)</li>
            </ul>
            <h4>CSS Libraries</h4>
            <ul>
              <li>Material UI</li>
              <li>PrimeNg</li>
              <li>Angular Material</li>
            </ul>
          </div>
        </div>
        <div className="skills-body secondary">
          <div className="skill-header">
            <FaCode /> <span>Other Skills</span>
          </div>
          <div className="skil-value">
            <ul>
              <li>Node Js </li>
              <li>Express Js (Mongoose)</li>
            </ul>
            <h4>CI/CD</h4>
            <ul>
              <li>GIT (Bitbucket, Github)</li>
              <li>Docker, Jenkins</li>
            </ul>
            <h4>Others</h4>
            <ul>
              <li>C programming</li>
              <li>Java (Spring boot- JPA)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
