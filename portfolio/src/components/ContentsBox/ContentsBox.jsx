import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContentsBox = ({ contents }) => {
  const [display, hideDisplay] = useState(true);

  if (!contents) return null;

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
            {contents.map((skill, i) => {
              if (typeof skill !== "object") {
                return (
                  <li key={`${skill}`}>
                    <div>
                      <span className="contents__number">{i + 1}</span>
                      <a href="#content-header">{skill}</a>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={`${skill}-${i}`}>
                    <div>
                      <span className="contents__number">{i + 1}</span>
                      <a href="#content-header">{skill.title}</a>
                      <ul>
                        {skill.list.map((item, j) => {
                          if (typeof item !== "object") {
                            return (
                              <li className="sub-entry" key={j * i}>
                                <a href="#content-header">
                                  <span className="contents__number">{`${
                                    i + 1
                                  }.${j + 1}`}</span>
                                  <span>{item}</span>
                                </a>
                              </li>
                            );
                          } else {
                            return (
                              <li className="sub-entry" key={j * i}>
                                <div>
                                  <span className="contents__number">{`${
                                    i + 1
                                  }.${j + 1}`}</span>
                                  <Link to={`/resume/${item.destination}`}>
                                    <div href="#content-header">{item.link}</div>
                                  </Link>
                                </div>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default ContentsBox;
