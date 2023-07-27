import React from "react";
import "./style.scss";
import Arrow from "../Arrow";

function CallToAction({ text }) {
  return (
    <div className="call-to-action">
      <span className="text">{text}</span>
      <Arrow />
    </div>
  );
}

export default CallToAction;
