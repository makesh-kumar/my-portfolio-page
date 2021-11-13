import React from "react";
import "./Content.css";
import {
  BsGithub,
  BsLinkedin,
  BsFillTelephone,
  BsEnvelope,
} from "react-icons/bs";
import { BrowserRouter, Link, Route } from "react-router-dom";

import {
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaRegEnvelope,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaCodepen,
  FaBusinessTime,
} from "react-icons/fa";
function Content() {
  return (
    <div className="content">
      <div className="content-body">
        <div className="about">
          <div className="about-photo">
            <img
              className="pic"
              alt="me"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFrHdgHAGFG8g/profile-displayphoto-shrink_800_800/0/1616085760706?e=1642032000&v=beta&t=6zEKriVGOUChDzTsZRjaH8KqnYAq1jWge_-T8Me88xs"
            />
          </div>
          <div className="about-detail">
            <div className="detail-name">Makesh Kumar</div>
            <div className="detail-pos">Web Developer</div>
            <div className="detail-office">
              <FaBusinessTime />
              Wipro Technologies
            </div>
            <div className="icon-list">
              <a
                href="https://github.com/makesh-kumar"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/makesh-kumar/"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="tel:+919095774441"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaPhone />
              </a>
              <a
                href="mailto:mynameismakesh@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaRegEnvelope />
              </a>
              <a
                href="https://twitter.com/this_is_makesh"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/makesh.thedon"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://codepen.io/makesh-kumar"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaCodepen />
              </a>
            </div>
          </div>
        </div>
        <div className="bio">
          <h1>About Me</h1>
          <div className="bio-desc">
            &nbsp;&nbsp;&nbsp; Hi 👋 there, My Name is <strong>Makesh</strong>,
            I'm an Engineering graduate and a web developer with 2 years of
            experience in the IT industry, I'm very much passionate about
            developing web applications with a nice and cool user interface
            using modern
            <strong>Javascript</strong> frameworks like <strong>Angular</strong>
            , <strong>React</strong>.
          </div>
          <br />
          {/* <div className="bio-desc">
            I'm intersted in building applications end to end on MEAN/MERN stack
            technologies,and have a keen intrest in debugging and fixing issues
          </div> */}

          {/* https://drive.google.com/file/d/1vAZG88-X4lA3NMYYpnxh8ifycsfKh13f/view?usp=sharing */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn">
            See my Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;
