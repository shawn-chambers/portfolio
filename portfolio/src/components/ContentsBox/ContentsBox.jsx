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
                      <a href="#resume">{skill}</a>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={`${skill}-${i}`}>
                    <div>
                      {skill.header ? (
                        <>
                          <span className="contents__number">{i + 1}</span>
                          <a href={`#${skill.header}`}>{skill.header}</a>
                        </>
                      ) : (
                        <div key={`${skill}`}>
                          <span className="contents__number">{i + 1}</span>
                          <Link to={`/resume/${skill.destination}`}>
                            <div href="#resume">{skill.link}</div>
                          </Link>
                        </div>
                      )}
                      <ul>
                        {skill.list
                          ? skill.list.map((item, j) => {
                              if (typeof item !== "object") {
                                return (
                                  <li
                                    className="sub-entry"
                                    key={`${item}-${j}`}
                                  >
                                    <a href="#resume">
                                      <span className="contents__number">{`${
                                        i + 1
                                      }.${j + 1}`}</span>
                                      <span>{item}</span>
                                    </a>
                                  </li>
                                );
                              } else {
                                return (
                                  <li
                                    className="sub-entry"
                                    key={`${item}-${j}`}
                                  >
                                    <div>
                                      <span className="contents__number">{`${
                                        i + 1
                                      }.${j + 1}`}</span>
                                      {item.url ? (
                                        <a
                                          href={item.url}
                                          target="_blank"
                                          rel="noreferrer noopener"
                                        >
                                          {item.link}
                                        </a>
                                      ) : (
                                        <Link
                                          to={`/resume/${item.destination}`}
                                        >
                                          <div href="#resume">
                                            {item.link}
                                          </div>
                                        </Link>
                                      )}
                                    </div>
                                  </li>
                                );
                              }
                            })
                          : null}
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
