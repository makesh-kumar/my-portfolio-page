import React, { useState } from "react";
import "./Header.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "./../M-logos_black.png";
function Header() {
  const [mobileMenu, setmobileMenu] = useState(false);

  const onMenuIconClick = () => {
    setmobileMenu((prev) => !prev);
  };
  return (
    <div className="header">
      <div className="header-container">
        <div className="name-container">
          <img alt="log" height="60px" src={logo} />
          <div className="name">Makesh Kumar</div>
        </div>

        <div className="section-container-desktop">
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

        <div onClick={onMenuIconClick} className="section-container-mobile">
          <AiOutlineMenu />
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

      {mobileMenu && (
        <div onClick={onMenuIconClick} className="header-list">
          <Link className="menu-item" to="/">
            Home
          </Link>

          <Link className="menu-item" to="/about">
            About
          </Link>

          <Link className="menu-item" to="/skills">
            Skills
          </Link>
          <Link className="menu-item" to="/work">
            Work
          </Link>
          <Link className="menu-item" to="/others">
            Others
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
