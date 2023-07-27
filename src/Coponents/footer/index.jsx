import React from "react";
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";

import Section from "../Shared/Section"
import Logo from "../../images/logoweb.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helper"

import "./style.scss";

const Footer = () => {
  return (
    <Section
    background="dark"
    className="footer"
>
    <div className="footer-content-wrapper">
        <div className="footer-logo">
            <img
                src={Logo}
                alt="JS Dev Hindi"
            />
        </div>
        <ul className="footer-menu-items">
            <li
                className="footer-menu-item"
                onClick={() => scrollToSection("skills")}
            >
                Skills
            </li>
            <li
                className="footer-menu-item"
                onClick={() => scrollToSection("Project")}
            >
                Portfolio
            </li>
            <li
                className="footer-menu-item"
                onClick={() => scrollToSection("blogs")}
            >
                Blogs & Articles
            </li>
            <li
                className="footer-menu-item"
                action={() => {
                    scrollToSection("Contact");
                }}
            >
                Contact me
            </li>
        </ul>
        <div className="social-icons">
            <SocialIcon
                color="#FF0000"
                icon={<FaYoutube />}
                link="https://www.youtube.com/"
            />
            <SocialIcon
                color="#0D2636"
                icon={<FaGithub />}
            />
            <SocialIcon
                color="#0A66C2"
                icon={<FaLinkedinIn />}
            />
            <SocialIcon
                color="#f2740d"
                icon={<FaStackOverflow />}
            />
            <SocialIcon
                color="#E84C88"
                icon={<FaInstagram />}
            />
        </div>
        <div className="bottom-bar">
            <div className="copyright-text">
                Copyright 2023 Mohd Shahzil | All Rights Reserved
            </div>
        </div>
    </div>
</Section>
  )
}

export default Footer