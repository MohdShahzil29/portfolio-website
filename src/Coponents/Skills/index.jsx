import React from "react";
import "./style.scss";
import Section from "../Shared/Section";
import TechIcon from "../../images/tech-icons.png";
import Calltoaction from "../Shared/Calltoaction";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={TechIcon} alt="" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            I am a skilled full stack developer specializing in web3
            technologies. With expertise in blockchain development and
            decentralized applications, I bring a comprehensive set of skills in
            front-end and back-end development. My proficiency extends to
            creating seamless mobile experiences using React Native,
          </p>
          <Calltoaction text="Github" href="https://github.com/" />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
