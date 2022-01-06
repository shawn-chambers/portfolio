import React from "react";
import { Link } from "react-router-dom";

const displayTitle = (link) => {
  switch (link) {
    case "Resume":
      return "Resumé";
    case "Resume Doc":
      return "Resumé Document";
    default:
      return `${link}`
  }
}

const Links = ({ links }) => {
  return (
    <>
      {links.map((d, i) => {
        if (d.url) {
          return (
            <div key={i + 1} className={`home__link home__link--${i + 1}`}>
              <a href={d.url} target="_blank" rel="noreferrer noopener">
                {displayTitle(d.title)}
              </a>
              <div className="home__link--subheader">{d.subHeader}</div>
            </div>
          );
        } else {
          return (
            <div key={i + 1} className={`home__link home__link--${i + 1}`}>
              <Link to={`/resume/${d.title.toLowerCase()}`}>{displayTitle(d.title)}</Link>
              <div className="home__link--subheader">{d.subHeader}</div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Links;
