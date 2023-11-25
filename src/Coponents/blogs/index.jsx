import React from "react";
import "./style.scss";
import Section from "../Shared/Section";
import blogs1 from "../../images/blogs/blog-thumb-1.png";
import blogs2 from "../../images/blogs/blog-thumb-2.png";
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
          title="React Native E-commerce App"
          discription="Full Stack React Native E-commerce App with payment integration and user or admin dashboard support"
          href="https://github.com/MohdShahzil29/Full-stack-e-commerce-app"
        />
        <BlogCard
          user="Mohd Shahzil"
          date="June 7, 2023"
          image={blogs2}
          title="Web3 Paypal"
          discription="Web3 PayPal site blending Solidity & React for secure, transparent transactions. 💸 Revolutionizing payments with blockchain magic"
          href="https://github.com/MohdShahzil29/web3-paypal"
        />
        <BlogCard
          user="Mohd Shahzil"
          date="June 7, 2023"
          image={blogs3}
          title="Blood Bank website using mern"
          discription="Blood bank website is specially for those who want to donate blood"
          href="https://github.com/MohdShahzil29/Mern-blood-bank"
        />
      </div>
    </Section>
  );
};

export default Blogs;
