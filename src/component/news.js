import React from "react";
import NavBarNews from "./navnews";

export default function NewsUp() {
  return (
    <div>
      <NavBarNews />
      <div className="title-news">News</div>
      <div className="news">
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
            elections. Check Bihar election result seat-wise, winning candidate,
            party, margin and more.
          </p>
        </div>
        <div className="news-block">
          <div className="news-title">
            NDA Meeting On Sunday At 12:30 PM To Elect Leader: Nitish Kumar
          </div>
          <p className="news-content">
            Bihar Election Results: On Thrusday, Nitish Kumar said that the
            decision on who will be the next Chief Minister will be taken by the
            alliance.
          </p>
        </div>
        <div className="news-block">
          <div className="news-title">
            Final tally puts NDA in the majority with 125 seats as RJD remains
            the single largest party
          </div>
          <p className="news-content">
            The nail biting tug-of-war between the Grand Alliance and the
            National Democratic Alliance(NDA) has come to a close with the NDA
            hitting the magic mark of 122 seats late last night
          </p>
        </div>
        <div className="news-block">
          <div className="news-title">
            So near, yet so far for Tejashwi: MGB got just 0.03% votes less than
            NDA
          </div>
          <p className="news-content">
            At the end of a cliffhanger unlike any that India has been witness
            to in recent times, what seperated NDA and MGB terms of the total
            votes they got was a mere 12,768 votes.
          </p>
        </div>
        <div className="news-block">
          <div className="news-title">
            On Rahul Gandhi's Voting Machine Remark, Chirag Paswan's "Good Sign"
            Jibe
          </div>
          <p className="news-content">
            Ram Vilar Paswan's remark came in response to Congress leader Rahul
            Gandhi's comment that "EVM is not EVM, but MVM, Modi Voting
            Machine".
          </p>
        </div>
      </div>
    </div>
  );
}
