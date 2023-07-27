import React from "react";
import { useState } from "react";
import "./style.scss";

const filtersData = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Products",
    id: "product",
  },
  {
    name: "Web Pages",
    id: "web-page",
  },
  {
    name: "Web Apps",
    id: "web-app",
  },
  {
    name: "Mobile Apps",
    id: "mobile-app",
  },
];

const Fillters = ({ fillterProject }) => {
  const [active, setActive] = useState("");
  const clickhandler = (id) => {
    setActive(id);
    fillterProject(id);
  };
  return (
    <ul className="fillters-menu-item">
      {filtersData.map((item) => {
        return (
          <li
            key={item.id}
            className={`fillter-menu-item ${
              active === item.id ? "active" : ""
            }`}
            onClick={() => clickhandler(item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Fillters;
