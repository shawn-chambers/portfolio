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
      .get("/data/portfolio.json")
      .then(({ data }) => {
        setResume(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="home">
        <div className="home__header">
          <span>S</span>
          <span>HAWN CHAMBER</span>
          <span>S</span>
        </div>
        <div className="home__header--sub">Web Developer - Sacramento, CA</div>
        <div className="home__center">
          <div className="home__logo-container">
            <Link to="/resume/Resume">
              <Logo />
            </Link>
          </div>
          {resume.links && <Links links={resume.links} />}
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
