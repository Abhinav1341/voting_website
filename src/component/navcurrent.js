import React from "react";
import { Link } from "react-router-dom";

export default function NavBarCurrent() {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav">
          <Link to="/" className="link">
            Home
          </Link>
        </div>
        <div className="nav">
          <Link to="/faqs" className="link">
            FAQs
          </Link>
        </div>
        <div className="nav c">
          <Link to="/currentEL" className="link h">
            Current Election
          </Link>
        </div>
        <div className="nav">
          <Link to="/news" className="link">
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
