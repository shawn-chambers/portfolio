import React from "react";
import ContentsBox from "../ContentsBox/ContentsBox";
import ContentsBox2 from "../ContentsBox/ContentsBox2";
import SearchBar from "../SearchBar/SearchBar";
import { ContentContainer } from "./ContentStyles.css";

const Content = () => {
  return (
    <>
      <div className="resume">
        {/* <ContentContainer> */}
        <div className="resume__content--gradient"></div>
        <div className="resume__content--header-container">
          <div className="header">
            <div className="header__tabs--left">
              <div className="header__tab">
                <div className="selected tab">Article</div>
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
        <div className="content-container">
          <div className="content-body">
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
            <ContentsBox2 />
          </div>
        </div>
        {/* </ContentContainer> */}
      </div>
    </>
  );
};

export default Content;

/*
https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/tab-current-fade.png?22887
*/
