import React from "react";
import { Link } from "react-router-dom";

export default function NavBarAbout() {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav">
          <Link to="/" className="link ">
            Home
          </Link>
        </div>
        <div className="nav">
          <Link to="/faqs" className="link ">
            FAQs
          </Link>
        </div>
        <div className="nav">
          <Link to="/currentEL" className="link ">
            Current Election
          </Link>
        </div>
        <div className="nav">
          <Link to="/news" className="link ">
            News
          </Link>
        </div>
        <div className="nav e">
          <Link to="/aboutUs" className="link j">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
