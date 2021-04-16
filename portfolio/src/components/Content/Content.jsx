import React from "react";
import ContentsBox from "../ContentsBox/ContentsBox";
import Footer from "../Footer/Footer";
import Picture from "../Pictures/Picture";
import Header from "../Header/Header";

const Content = ({ content }) => {
  const handleLinks = (string) => {
    let content = string.split("[").map((el) => el.split("]"));
    let [linkWord, url] = content[1][0].split(" ");

    return (
      <>
        <span>{content[0][0]}</span>
        <span>
          <a href={url} target="_blank" rel="noreferrer noopener">
            {linkWord}
          </a>
        </span>
        <span>{content[1][1]}</span>
      </>
    );
  };

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
              if (typeof paragraph === "object") {
                return (
                  <>
                    {console.log("paragraph", paragraph)}
                    {paragraph.header ? (
                      <h3 className={paragraph.header}>{paragraph.header}</h3>
                    ) : null}
                    <p key={`paragraph-${i}`}>
                      {paragraph.link
                        ? handleLinks(paragraph.content)
                        : paragraph.content}
                    </p>
                  </>
                );
              } else {
                return <p key={`paragraph-${i}`}>{paragraph}</p>;
              }
            })}
            <ContentsBox contents={content.box} />
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
