import React from "react";
import "./About.css";
import {
  FaUserTie,
  FaRegCalendarAlt,
  FaUserGraduate,
  FaRegEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaCodepen,
  FaBusinessTime,
  FaHome,
} from "react-icons/fa";
function About() {
  return (
    <div className="about-container">
      <div className="about-body">
        <div className="basic-info">
          <div className="info-card">
            <h3>Basic Details</h3>
            <p className="info-detail">
              <FaUserTie />
              <span> Makesh Kumar N</span>
            </p>
            <p className="info-detail">
              <FaRegCalendarAlt />
              <span> 01/04/1997</span>
            </p>
            <p className="info-detail">
              <FaUserGraduate />
              <span> BE (2015 -19)</span>
            </p>
            <p className="info-detail">
              <FaHome />
              <span>
                {" "}
                Pettaikalipalayam, Bellampatti(Po),
                <br /> Dharapuram, Tiruppur,
                <br />
                TamilNadu - 638702
              </span>
            </p>
          </div>
        </div>
        <div className="contact-info">
          <div className="info-card">
            <h3>Contact Info</h3>
            <p className="info-detail">
              <FaRegEnvelope /> mynameismakesh@gmail.com
            </p>
            <p className="info-detail">
              <FaPhone /> +91 9095774441
            </p>
            <p className="info-detail">
              <FaGithub />
              <span> https://github.com/makesh-kumar</span>
            </p>
            <p className="info-detail">
              <FaLinkedinIn />
              <span> https://www.linkedin.com/in/makesh-kumar</span>
            </p>
            <p className="info-detail">
              <FaCodepen /> https://codepen.io/makesh-kumar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
