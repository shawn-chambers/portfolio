import React from "react";
import Logo from "../Logo/Logo";
import Links from "../Links/Links";

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
            <Logo />
          </div>
          <Links />
        </div>
      </div>
    </>
  );
};

export default Top;
