import React from "react";
import { Link } from "react-router-dom";

const Links = ({ links }) => {
  return (
    <>
      {links.map((d, i) => {
        return (
          <div key={i + 1} className={`home__link home__link--${i + 1}`}>
            <Link to={`/resume/${d}`}>{`Link ${d}`}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Links;
