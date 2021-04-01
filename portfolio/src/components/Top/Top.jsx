import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import Resume from "../Resume/Resume";

const Top = () => {
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
            <Link to="/resume/main">
              <Logo />
            </Link>
          </div>
          <Links />
        </div>
      </div>
      <Switch>
        <Route path="/resume/:param" component={Resume} />
      </Switch>
    </>
  );
};

export default Top;
