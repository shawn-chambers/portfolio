import React, { useState } from "react";

const ContentsBox = () => {
  const [display, hideDisplay] = useState(true);

  return (
    <>
      <div className="contents">
        <div className="contents__header">
          <h3>Contents</h3>
          <span className="contents__header expander">
            {" "}
            [
            <span onClick={() => hideDisplay(!display)}>
              {display ? "hide" : "show"}
            </span>
            ]
          </span>
        </div>
        {display ? (
          <ul>
            <li>
              <a href="#content-header">
                <span className="contents__number">1</span>
                <span>Technical Skills</span>
              </a>
            </li>
            <li>
              <a href="#content-header">
                <span className="contents__number">2</span>
                <span>Applications</span>
              </a>
              <ul>
                <li className="sub-entry">
                  <a href="#content-header">
                    <span className="contents__number">2.1</span>
                    <span>Choose Your Own Adventure</span>
                  </a>
                </li>
                <li className="sub-entry">
                  <a href="#content-header">
                    <span className="contents__number">2.2</span>
                    <span>EbayProductDescription</span>
                  </a>
                </li>
                <li className="sub-entry">
                  <a href="#content-header">
                    <span className="contents__number">2.3</span>
                    <span>Drop.clone</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#content-header">
                <span className="contents__number">3</span>
                <span>Professional Experience</span>
              </a>
              <ul>
                <li className="sub-entry">
                  <a href="#content-header">
                    <span className="contents__number">3.1</span>
                    <span>Galvanize Inc.</span>
                  </a>
                </li>
                <li className="sub-entry">
                  <a href="#content-header">
                    <span className="contents__number">3.2</span>
                    <span>Eat Club</span>
                  </a>
                </li>
                <li className="sub-entry">
                  <a href="#content-header">
                    <span className="contents__number">3.3</span>
                    <span>School Aged Child Care</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#content-header">
                <span className="contents__number">4</span>
                <span>Education</span>
              </a>
              <ul>
                <li className="sub-entry">
                  <a href="#content-header">
                    <span className="contents__number">4.1</span>
                    <span>Hack Reactor</span>
                  </a>
                </li>
                <li className="sub-entry">
                  <a href="#content-header">
                    <span className="contents__number">4.2</span>
                    <span>Minnesota State University</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default ContentsBox;
