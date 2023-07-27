import React from "react";
import "./style.scss";
import Arrow from "../../Shared/Arrow";

const BlogCard = ({ user, date, image, title, discription }) => {
  return (
    <div className="blog-card">
      <div className="image-scetion">
        <img src={image} alt={title} />
      </div>
      <div className="content-section">
        <div className="info-bar">
          <div className="user-name">By {user}</div>
          <div className="posted-date">{date}</div>
        </div>
        <h3>{title}</h3>
        <p>{discription}</p>
        <div className="readmore-cta">
          <span className="text">Read More</span>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
