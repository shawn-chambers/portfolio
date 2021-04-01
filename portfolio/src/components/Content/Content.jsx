import React from "react";
import ContentsBox from "../ContentsBox/ContentsBox";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";
import Picture from "../Pictures/Picture";
import LogIn from "../LogIn/LogIn";

const Content = ({ content }) => {
  if (!content) return null;
  console.log("header", content.header)
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
            <h1>{content.header}</h1>
            <hr></hr>
            <p className="content-subheader">
              From Shawn Chambers, the foremost expert on{" "}
              <span className="keyword">Shawn Chambers</span>
            </p>
            <p>{content.description}</p>
            <ContentsBox contents={content.box} />
            {content.pictures &&
              content.pictures.map((pic, i) => (
                <Picture picture={pic} key={`pic-${i}`} />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Content;

/*
https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/tab-current-fade.png?22887
*/
