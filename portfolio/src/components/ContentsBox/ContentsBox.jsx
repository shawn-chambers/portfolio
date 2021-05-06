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
                      <div>{skill}</div>
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
                          <button>{skill.header}</button>
                        </>
                      ) : (
                        <div key={`${skill}`}>
                          <span className="contents__number">{i + 1}</span>
                          <Link to={`/resume/${skill.destination}`}>
                            <div>{skill.link}</div>
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
                                    <button>
                                      <span className="contents__number">{`${
                                        i + 1
                                      }.${j + 1}`}</span>
                                      <span>{item}</span>
                                    </button>
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
