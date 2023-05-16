import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import NavBarHome from "./navhome";
import { Link } from "react-router-dom";

export default function Home() {
  const percentage = 74;

  return (
    <div>
      <div className="home-main">
        <div className="p-bar">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({ textColor: "#2f2f2f", pathColor: "#1a1d6c" })}
          />
          ;
        </div>
        <div className="state-name">
          Bihar
          <div className="phase">Phase1</div>
        </div>
        <Link className="see-more" to="/currentEl">
          Below is the list of winners of election
        </Link>
      </div>
      <div>
        <Link to="/news" className="latest-news">
          Latest Election News
        </Link>
        <div className="news-home">
          <div className="news-block">
            <div className="news-title">
              Party Position In Bihar Assembly And How Nitish Kumar Won The
              Numbers Game To Continue As CM
            </div>
            <p className="news-content">
              The BJP needed Nitish Kumar to keep RJD out of power and Nitish
              needed BJP to become CM. Now Nitish is set to remain CM with RJD's
              support.
            </p>
          </div>
          <div className="news-block">
            <div className="news-title">
              Bihar election result 2020: Seat wise full list of winners
            </div>
            <p className="news-content">
              Here is the complete list of winners of the Bihar assembly
              elections. Check Bihar election result seat-wise, winning
              candidate, party, margin and more.
            </p>
          </div>
        </div>
      </div>
      <NavBarHome />
    </div>
  );
}
