import React from "react";
import "./style.scss";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
import Navigtion from "./Navigation-Bar";
import IntroContent from "./intro-content";
//import Skills from "../Skills";

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="vector-bg" id="paralax"></div>
      <img src={cloud} alt="Somthing Wrong" className="cloud" />
      <img src={cloudSoft} alt="Somthing Wrong" className="cloud-soft" />
      <div className="content">
        <Navigtion />
        <IntroContent />
      </div>
    </div>
  );
};
export default Intro;
