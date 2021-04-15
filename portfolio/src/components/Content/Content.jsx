import React from "react";
import ContentsBox from "../ContentsBox/ContentsBox";
import Footer from "../Footer/Footer";
import Picture from "../Pictures/Picture";
import Header from "../Header/Header";

const Content = ({ content }) => {
  let displayBox = false;

  return (
    <>
      <div className="resume">
        <Header />
        <div className="resume__content-container">
          <div className="resume__content-container--body">
            <h1>{content.header}</h1>
            <hr></hr>
            <p className="content-subheader">
              From Shawn Chambers, the foremost expert on{" "}
              <span className="keyword">Shawn Chambers</span>
            </p>
            {content.pictures && <Picture pictures={content.pictures} />}
            {content.description.map((paragraph, i) => {
              if (paragraph.header) {
                if (i === 1) {
                  displayBox = true;
                  return (
                    <>
                      <h3 className={paragraph.header}>{paragraph.header}</h3>
                      <p key={`paragraph-${i}`}>{paragraph.content}</p>
                      <ContentsBox contents={content.box} />
                    </>
                  );
                }
                return (
                  <>
                    <h3 className={paragraph.header}>{paragraph.header}</h3>
                    <p key={`paragraph-${i}`}>{paragraph.content}</p>
                  </>
                );
              } else {
                if (i === 1) {
                  displayBox = true;
                  return (
                    <>
                      <p key={`paragraph-${i}`}>{paragraph}</p>
                      <ContentsBox contents={content.box} />
                    </>
                  );
                }
                return <p key={`paragraph-${i}`}>{paragraph}</p>;
              }
            })}
          {!displayBox ? <ContentsBox contents={content.box} /> : null}
          </div>
          {console.log("display box?", displayBox)}
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
