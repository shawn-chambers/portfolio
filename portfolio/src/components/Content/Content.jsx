import React from "react";
import { Link } from "react-router-dom";
import ContentsBox from "../ContentsBox/ContentsBox";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import Picture from "../Picture/Picture";

const Content = ({ content }) => {
  let displayed = false;
  let pictureSide = 'left';

  const handleLinks = (string) => {
    let content = string
      .split("{")
      .map((el) => el.split("}"))
      .flat();

    let text = content.map((el) =>
      el.substring(0, 7) === '"link":' ? JSON.parse(`{${el}}`) : el
    );

    return (
      <span>
        {text.map((el, i) => {
          if (typeof el === "object") {
            return (
              <span key={`content-link-${el.link}`}>
                {" "}
                {el.internal === true ? (
                  <Link to={el.url}>{el.link}</Link>
                ) : (
                  <a href={el.url} target="_blank" rel="noreferrer noopener">
                    {el.link}
                  </a>
                )}{" "}
              </span>
            );
          } else {
            return (
              <>
                <span key={`content-${new Date().getTime()}`}>{el}</span>
                {console.log(`content-${new Date().getTime()}`)}
              </>
            );
          }
        })}
      </span>
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
            {content.pictures && <Carousel pictures={content.pictures} />}
            {content.description.map((paragraph, i) => {
              if (typeof paragraph === "object") {
                if (paragraph.box) {
                  displayed = true;
                  return (
                    <>
                      <ContentsBox
                        contents={content.box}
                        key={`content-box-${i}`}
                      />
                    </>
                  );
                } else if (paragraph.picture) {
                  pictureSide = pictureSide === 'left' ? 'right' : 'left';

                  return (
                    <Picture
                      url={paragraph.picture.url}
                      caption={paragraph.picture.caption}
                      side={pictureSide}
                    />
                  );
                }
                return (
                  <>
                    {paragraph.section ? (
                      <div
                        className="resume__content--section-header"
                        key={`header-${i}`}
                      >
                        {console.log(`header-${i}`)}
                        <h2>{paragraph.section}</h2>
                        <hr></hr>
                      </div>
                    ) : null}
                    {paragraph.header ? (
                      <h3 key={`headers-${i}`} className={paragraph.header}>
                        {paragraph.header}
                      </h3>
                    ) : null}
                    <p
                      key={`paragraph-${i}`}
                      className={paragraph.indent ? "indent" : ""}
                    >
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
            {!displayed && <ContentsBox contents={content.box} />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Content;
