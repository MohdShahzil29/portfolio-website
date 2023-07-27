import React from "react";
import "./style.scss";
import Arrow from "../../Shared/Arrow";

const Showcase = ({ data, transition }) => {
  return (
    <div className="Projects-showcase">
      {data.map((project) => (
        <div
          key={project.name}
          className={`showcase-item ${
            transition === "zoomOut"
              ? "zoomOut"
              : transition === "zoomin"
              ? "zoomIn"
              : ""
          }`}
        >
          <div className="meta-content">
            <h3>{project.name}</h3>
            <div className="go-to-cta">
              <span className="text">Project Detail</span>
              <Arrow />
            </div>
          </div>
          <img src={project.media.thumbnail} />
        </div>
      ))}
    </div>
  );
};

export default Showcase;
