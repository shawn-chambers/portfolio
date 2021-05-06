import React from "react";
import { Link } from "react-router-dom";

const displayTitle = (link) => {
  switch (link) {
    case "Resume":
      return "Resumé";
    case "Resume Doc":
      return "Resumé Word Document";
    default:
      return `${link}`
  }
}

const Links = ({ links }) => {
  return (
    <>
      {links.map((d, i) => {
        if (typeof d === "object") {
          return (
            <div key={i + 1} className={`home__link home__link--${i + 1}`}>
              <a href={d.url} target="_blank" rel="noreferrer noopener">
                {displayTitle(d.title)}
              </a>
            </div>
          );
        } else {
          return (
            <div key={i + 1} className={`home__link home__link--${i + 1}`}>
              <Link to={`/resume/${d}`}>{displayTitle(d)}</Link>
            </div>
          );
        }
      })}
    </>
  );
};

export default Links;
