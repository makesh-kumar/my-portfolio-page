import React from "react";
import "./Others.css";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
function Others() {
  return (
    <div className="others">
      <div className="others-container">
        <div className="other-proj">
          <h2>Covid Tracker</h2>
          <p>
            This a small web application where we can see number covid cases
            around world and various data related to covid.
          </p>
          <p>
            Technologies used : <strong>Angular, Angular Material</strong>{" "}
          </p>

          <a
            class="links"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineOpenInBrowser class="icons" /> See App Live
          </a>

          <a
            class="links"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub class="icons" /> Code
          </a>
        </div>

        <div className="other-proj">
          <h2>Digital Calculator</h2>
          <p>
            In this application, I have designed a calculator with all basic
            functionalities.
          </p>
          <p>
            Technologies used : <strong>React, Material-UI</strong>{" "}
          </p>

          <a
            class="links"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineOpenInBrowser class="icons" /> See App Live
          </a>

          <a
            class="links"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub class="icons" /> Code
          </a>
        </div>
        <div className="other-proj">
          <h2>Covid Tracker</h2>
          <p>
            This a small web application where we can see number covid cases
            around world and various data related to covid.
          </p>
          <p>
            Technologies used : <strong>Angular, Angular Material</strong>{" "}
          </p>
        </div>
        <div className="other-proj">
          <h2>Covid Tracker</h2>
          <p>
            This a small web application where we can see number covid cases
            around world and various data related to covid.
          </p>
          <p>
            Technologies used : <strong>Angular, Angular Material</strong>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Others;
