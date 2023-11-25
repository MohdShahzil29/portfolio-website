import React from "react";
import "./style.scss";
import icon from "../../../images/hand.png";
import CallToAction from "../../Shared/Calltoaction";
import girl from "../../../images/girl.png";
import image from "../../../images//photo.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={icon} alt="" />
              </span>
              <span className="text">I Am</span>
            </span>
            <span className="big-text">Mohd Shahzil</span>
          </h1>
          <p>
            Passionate about transforming ideas into cutting-edge solutions! 💻
            Excited about the endless possibilities of Web3 and skilled in
            solving complex problems through Data Structures and Algorithms.
          </p>
          <CallToAction href="https://www.linkedin.com/in/mohd-shahzil-287s/" text="Contact me" />
        </div>
        <div className="right-col">
          <img src={image} alt="Mohd shahzil" />

          <div className="highlights horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">Exploring...</div>
          </div>

          <div className="highlights verticle">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>Student</span>
              BCA 2nd Year
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
