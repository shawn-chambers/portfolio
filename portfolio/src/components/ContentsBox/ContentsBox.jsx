import React, { useState } from "react";

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
                    <a href="#content-header">
                      <span className="contents__number">{i + 1}</span>
                      <span>{skill}</span>
                    </a>
                  </li>
                );
              } else {
                return (
                  <li key={`${skill}-${i}`}>
                    <a href="#content-header">
                      <span className="contents__number">{i + 1}</span>
                      <span>{skill.title}</span>
                      <ul>
                        {skill.list.map((item, j) => (
                            <li className="sub-entry" key={j * i}>
                              <a href="#content-header">
                                <span className="contents__number">{`${i + 1}.${j + 1}`}</span>
                                <span>{item}</span>
                              </a>
                            </li>
                        ))}
                      </ul>
                    </a>
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
