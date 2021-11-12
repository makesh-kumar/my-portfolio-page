import React from "react";
import "./Content.css";
import {
  BsGithub,
  BsLinkedin,
  BsFillTelephone,
  BsEnvelope,
} from "react-icons/bs";
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
              <div className="icon">
                <FaGithub />
              </div>
              <div className="icon">
                <FaLinkedinIn />
              </div>
              <div className="icon">
                <FaPhone />
              </div>
              <div className="icon">
                <FaRegEnvelope />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaCodepen />
              </div>
            </div>
          </div>
        </div>
        <div className="bio">
          <h1>About Me</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h3>

          <button className="btn">See my Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
