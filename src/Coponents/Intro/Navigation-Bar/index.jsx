import React, { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import logo from "../../../images/logoweb.png";
import CallToAction from "../../Shared/Calltoaction"
import { scrollToSection } from "../../utils/helper";

import "./style.scss";

function Navigtion() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItemClickHandler = (section) => {
      setMobileMenu(!mobileMenu);
      scrollToSection(section);
  };

  return (
      <div className="top-navigation-bar">
          <div className="app-logo">
              <img
                  src={logo}
                  alt="JS Dev"
              />
          </div>
          <div
              className="mobile-menu"
              onClick={() => setMobileMenu(!mobileMenu)}
          >
              {mobileMenu ? (
                  <IoMdClose
                      size={24}
                      color="#fff"
                  />
              ) : (
                  <CgMenuRight
                      size={24}
                      color="#fff"
                  />
              )}
          </div>
          <div className={`navigation ${mobileMenu ? "active" : ""}`}>
              <span
                  className="navigation-item"
                  onClick={() => menuItemClickHandler("skills")}
              >
                  Skills
              </span>
              <span
                  className="navigation-item"
                  onClick={() => menuItemClickHandler("Project")}
              >
                  Portfolio
              </span>
              <span
                  className="navigation-item"
                  onClick={() => menuItemClickHandler("blogs")}
              >
                  Blogs & Articles
              </span>
              <CallToAction
                  text="Contact me"
                  id="navContactMe"
                  action={() => {
                      menuItemClickHandler("contact");
                  }}
              />
          </div>
      </div>
  );
};

export default Navigtion;
