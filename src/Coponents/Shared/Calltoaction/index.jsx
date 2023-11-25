import React from "react";
import "./style.scss";
import Arrow from "../Arrow";

function CallToAction({ text, href }) {
  return (
    <div className="call-to-action">
      <a href={href} target="_blank" className="text">{text}</a>
      <Arrow />
    </div>
  );
}

export default CallToAction;
