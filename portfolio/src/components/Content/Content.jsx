import React from "react";
import ContentsBox from "../ContentsBox/ContentsBox";
import Footer from "../Footer/Footer";
import Picture from "../Pictures/Picture";
import Header from "../Header/Header";

const Content = ({ content }) => {
  let displayed = false;
  const handleLinks = (string) => {
    let content = string
      .split("{")
      .map((el) => el.split("}"))
      .flat();

    let text = content.map((el) =>
      el.substring(0, 7) === '"link":' ? JSON.parse(`{${el}}`) : el
    );

    return (
      <p>
        {text.map((el, i) => {
          if (typeof el === "object") {
            return (
              <span key={`content-link-${i}`}>
                <a href={el.url} target="_blank" rel="noreferrer noopener">
                  {el.link}
                </a>
              </span>
            );
          } else {
            return <span key={`content-${i}`}>{el}</span>;
          }
        })}
      </p>
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
                if (paragraph.box) {
                  displayed = true;
                  return (
                    <ContentsBox contents={content.box} />
                  )
                }
                return (
                  <>
                    {paragraph.section ? (
                      <>
                        <div className="resume__content--section-header">
                          <h2 key={`header-${i}`}>{paragraph.section}</h2>
                          <hr></hr>
                        </div>
                      </>
                    ) : null}
                    {paragraph.header ? (
                      <>
                        <h3 key={`header-${i}`} className={paragraph.header}>
                          {paragraph.header}
                        </h3>
                      </>
                    ) : null}
                    <>
                      <p
                        key={`paragraph-${i}`}
                        className={paragraph.indent ? "indent" : ""}
                      >
                        {paragraph.link
                          ? handleLinks(paragraph.content)
                          : paragraph.content}
                      </p>
                    </>
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
