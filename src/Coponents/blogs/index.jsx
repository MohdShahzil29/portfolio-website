import React from "react";
import "./style.scss";
import Section from "../Shared/Section";
// import blogs1 from "../../images/Blogs/blog-thumb-1.jpg";
// import blogs2 from "../../images/Blogs/blog-thumb-2.jpg";
// import blogs3 from "../../images/Blogs/blog-thumb-3.jpg";
import blogs1 from "../../images/blogs/blog-thumb-1.jpg";
import blogs2 from "../../images/blogs/blog-thumb-2.jpg";
import blogs3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";

const Blogs = () => {
  return (
    <Section id="blogs" title="Blogs and Artical" background="dark">
      <div className="blog-content-wrapper">
        <BlogCard
          user="Mohd Shahzil"
          date="June 7, 2023"
          image={blogs1}
          title="Jhok Sarkar Episode 1 Gets Mixed Public Reaction"
          discription="Jhok Sarkar is a new Hum Television drama serial. The drama is written by Hashim Nadeem who wrote Parizaad and Khuda Aur Mohabbat"
        />
        <BlogCard
          user="Mohd Shahzil"
          date="June 7, 2023"
          image={blogs2}
          title="Jhok Sarkar Episode 1 Gets Mixed Public Reaction"
          discription="Jhok Sarkar is a new Hum Television drama serial. The drama is written by Hashim Nadeem who wrote Parizaad and Khuda Aur Mohabbat"
        />
        <BlogCard
          user="Mohd Shahzil"
          date="June 7, 2023"
          image={blogs3}
          title="Jhok Sarkar Episode 1 Gets Mixed Public Reaction"
          discription="Jhok Sarkar is a new Hum Television drama serial. The drama is written by Hashim Nadeem who wrote Parizaad and Khuda Aur Mohabbat"
        />
      </div>
    </Section>
  );
};

export default Blogs;
