import React from "react";
import Top from "./page-top";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import FAQs from "./component/faqs";
import CurrentElement from "./component/currentEl";
import NewsUp from "./component/news";
import AboutUs from "./component/aboutUs";

function App() {
  return (
    <div>
      <Top />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="faqs" Component={FAQs} />
        <Route path="currentEl" Component={CurrentElement} />
        <Route path="news" Component={NewsUp} />
        <Route path="aboutUs" Component={AboutUs} />
      </Routes>
    </div>
  );
}

export default App;
