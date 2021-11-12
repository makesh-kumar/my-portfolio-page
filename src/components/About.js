import React from "react";
import "./About.css";
import {
  FaUserTie,
  FaRegCalendarAlt,
  FaUserGraduate,
  FaRegEnvelope,
  FaPhone,
} from "react-icons/fa";
function About() {
  return (
    <div className="about-container">
      <div className="about-body">
        <div className="about-img">
          <div>
            <img
              className="img"
              alt="me"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFrHdgHAGFG8g/profile-displayphoto-shrink_800_800/0/1616085760706?e=1642032000&v=beta&t=6zEKriVGOUChDzTsZRjaH8KqnYAq1jWge_-T8Me88xs"
            />
          </div>
        </div>
        <div className="about-info">
          <div className="info-title">
            <div className="title-name">
              Full Name <FaUserTie />
              &nbsp;&nbsp; :-
            </div>
            <div className="title-name">
              DOB <FaRegCalendarAlt /> &nbsp;&nbsp;:-
            </div>
            <div className="title-name">
              Qualification <FaUserGraduate />
              &nbsp;&nbsp;:-
            </div>
            {/* <div className="title-name">
              <br></br>
            </div> */}
            <div className="title-name">
              Email <FaRegEnvelope />
              &nbsp;&nbsp; :-
            </div>
            <div className="title-name">
              Mobile Num <FaPhone />
              &nbsp;&nbsp; :-
            </div>
          </div>
          <div className="info-value">
            <div className="title-value">Makesh Kumar N</div>
            <div className="title-value">01-04-1997</div>
            <div className="title-value">
              BE - ECE (2015-19)
              {/* <br /> (Hindusthan College of Engineering and Technology) */}
            </div>

            <div className="title-value">mynameismakesh@gmail.com</div>
            <div className="title-value">+91 9095774441</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
