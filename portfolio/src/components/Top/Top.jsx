import React, { useEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import Resume from "../Resume/Resume";
import axios from "axios";

const Top = () => {
  const [resume, setResume] = useState({});

  useEffect(() => {
    axios
      .get("https://shawnipedia.s3-us-west-1.amazonaws.com/shawnipedia-min.json")
      .then(({ data }) => {
        setResume(data);
      })
      .catch((err) => {
        console.log('Error fetching Portfolio JSON', err);
      });
  }, []);

  return (
    <>
      <div className="home">
        <div className="home__top">
          <div className="home__header">
            <span>S</span>
            <span>HAWN CHAMBER</span>
            <span>S</span>
          </div>
          <div className="home__header--sub">
            Web Developer - Sacramento, CA
          </div>
        </div>
        <div className="home__center">
          <div className="home__logo-container">
            <Link to="/resume/resume">
              <Logo />
            </Link>
          </div>
          <div className="home__center--links">
            {resume.links && <Links links={resume.links} />}
          </div>
        </div>
      </div>
      <Switch>
        <Route
          path="/resume/:param"
          render={() => <Resume content={resume} />}
        />
      </Switch>
    </>
  );
};

export default Top;
