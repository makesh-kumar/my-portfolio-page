import React from "react";
import "./Header.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="name-container">
          <div className="name">Makesh Kumar</div>
        </div>

        <div className="section-container">
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/about">
            About
          </Link>
          <Link className="item" to="/skills">
            Skills
          </Link>
          <Link className="item" to="/work">
            Work
          </Link>
          <Link className="item" to="/others">
            Others
          </Link>
        </div>

        {/* <div className="name-container">
          <div>Profile</div>
        </div>

        <div className="name-container">
          <div>Work</div>
        </div>

        <div className="name-container">
          <div>Contact</div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
