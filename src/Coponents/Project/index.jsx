import React, { useState } from "react";
import "./style.scss";
import Section from "../Shared/Section";
import Fillters from "./fillter";
import Showcase from "./showcase";

const projectsData = [
  {
    id: 1,
    name: "Thread Clone",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-7.png"),
    },
    link: "https://github.com/MohdShahzil29/thread-clone"
  },
  {
    id: 2,
    name: "Movie website",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-2.png"),
    },
    link: "https://github.com/MohdShahzil29/Movie-website"
  },
  {
    id: 3,
    name: "E-commerce App",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-8.png"),
    },
    link: "https://github.com/MohdShahzil29/Full-stack-e-commerce-app"
  },
  {
    id: 4,
    name: "Shoe Store",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-1.jpg"),
    },
    link: "https://github.com/MohdShahzil29/NEXT.JS-shoe-store-backend"
  },
  {
    id: 5,
    name: "My Dapp",
    tags: ["web-app", "web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-6.png"),
    },
    link: "https://github.com/MohdShahzil29/My-First-DApp"
  },
  {
    id: 6,
    name: "Blog Website",
    tags: ["product", "web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-4.png"),
    },
    link: "https://github.com/MohdShahzil29/blog-full-stack-app-frontend"
  },
  {
    id: 7,
    name: "Web3 Paypal",
    tags: ["web-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-3.png"),
    },
    link: "https://github.com/MohdShahzil29/web3-paypal"
  },
  {
    id: 8,
    name: "News Website",
    tags: ["web-app", "mobile-app", "web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-5.png"),
    },
    link: "https://github.com/MohdShahzil29/news-website-using-nextjs-frontend"
  },
];

const Project = () => {
  const [project, setProject] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const fillterProject = (tag) => {
    setTransition("zoomout");
    setTimeout(() => {
      if (tag !== "all") {
        const fillterProject = projectsData.filter((f) => f.tags.includes(tag));
        setProject(fillterProject);
      } else {
        setProject(projectsData);
      }
      setTransition("zoomin");
    }, 200);

    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  return (
    <Section id="Project" title="Cheak My Protfolio" background="light">
      <div className="project-content-wrapper">
        <Fillters fillterProject={(tag) => fillterProject(tag)} />
        <Showcase data={project} transition={transition} href={project.link} />
      </div>
    </Section>
  );
};

export default Project;
