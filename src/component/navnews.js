import React from "react";
import { Link } from "react-router-dom";

export default function NavBarNews() {
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
        <div className="nav ">
          <Link to="/currentEL" className="link">
            Current Election
          </Link>
        </div>
        <div className="nav d">
          <Link to="/news" className="link i">
            News
          </Link>
        </div>
        <div className="nav">
          <Link to="/aboutUs" className="link">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
