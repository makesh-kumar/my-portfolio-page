import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="name-container">
          <div className="name">Makesh Kumar</div>
        </div>

        <div className="section-container">
          <div className="item">Home</div>
          <div className="item">About</div>
          <div className="item">Contact</div>
          <div className="item">Work</div>
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
