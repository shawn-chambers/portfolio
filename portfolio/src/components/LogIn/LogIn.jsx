import React from "react";
import head from "../../assets/images/person_grey_24x24.png";

const LogIn = (props) => {
  return (
    <div className="resume__login">
      <div className="resume__login--logo-container">
        <img src={head} className="head-logo" alt="Icon" />
      </div>
      <span className="status">Not logged in</span>
      <span>Talk</span>
      <span>Contributions</span>
      <span>Create account</span>
      <span>Log in</span>
    </div>
  );
};

export default LogIn;
