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
            href="https://makesh-covid-tracker.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineOpenInBrowser class="icons" /> See App Live
          </a>

          <a
            class="links"
            href="https://github.com/makesh-kumar/covid-tracker"
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
            href="https://calculator-app-makesh.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineOpenInBrowser class="icons" /> See App Live
          </a>

          <a
            class="links"
            href="https://github.com/makesh-kumar/digital-calculator"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub class="icons" /> Code
          </a>
        </div>
        <div className="other-proj">
          <h2>Online News App</h2>
          <p>
            This a small react application where you can read news headlines and
            filter the news accordingly
          </p>
          <p>
            Technologies used :{" "}
            <strong>React, Material-UI, newsapi.org(API)</strong>{" "}
          </p>
          <a
            class="links"
            href="https://news-app-makesh.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineOpenInBrowser class="icons" /> See App Live
          </a>

          <a
            class="links"
            href="https://github.com/makesh-kumar/online-news-app-in-react"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub class="icons" /> Code
          </a>
        </div>
        <div className="other-proj">
          <h2>Responsive Login Page</h2>
          <p>
            Responsive SignIn/SignUp page in react using formik, yup and
            material-ui
          </p>
          {/* <p>
            Technologies used : <strong>Angular, Angular Material</strong>{" "}
          </p> */}
          <a
            class="links"
            href="https://login-register-page-makesh.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineOpenInBrowser class="icons" /> See App Live
          </a>

          <a
            class="links"
            href="https://github.com/makesh-kumar/small-login-page"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub class="icons" /> Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Others;
