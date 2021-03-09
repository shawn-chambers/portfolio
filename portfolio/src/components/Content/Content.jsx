import React from "react";
import ContentsBox from "../ContentsBox/ContentsBox";
import SearchBar from "../SearchBar/SearchBar";
import LogIn from "../LogIn/LogIn";

const Content = () => {
  return (
    <>
      <div className="resume">
        <LogIn />
        <div className="resume__content--header-container">
          <div className="header">
            <div className="header__tabs--left">
              <div className="header__tab">
                <div className="header__tab--selected">Article</div>
              </div>
              <div className="header__tab">
                <div className="header__tab--unselected">Talk</div>
              </div>
            </div>
            <div className="header__tabs--right">
              <div className="header__tab">
                <div className="header__tab--selected">Read</div>
              </div>
              <div className="header__tab">
                <div className="header__tab--unselected">View source</div>
              </div>
              <div className="header__tab">
                <div className="header__tab--unselected">View history</div>
              </div>
              <div className="header__tab">
                <div className="search__container">
                  <SearchBar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume__content-container">
          <div className="resume__content-container--body">
            <h1>Shawn Chambers</h1>
            <hr></hr>
            <p className="content-subheader">
              From Shawn Chambers, the foremost expert on{" "}
              <span className="keyword">Shawn Chambers</span>
            </p>
            <p>
              <span className="keyword">Shawn Chambers</span> is a Full Stack
              Engineer currently living in the Sacramento area of Northern
              California. He enjoys playing guitar (electric, acoustic, and
              bass) for his noisy creative outlet and enjoys drawing as his
              ‘quiet, the kids are sleeping’ cathartic time.
            </p>
            <ContentsBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

/*
https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/tab-current-fade.png?22887
*/
