import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Links = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get('/data/portfolio.json')
      .then(({data}) => {
        console.log('links', data);
        setLinks(data.links);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  if (links.length === undefined) {
    return null;
  }

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
