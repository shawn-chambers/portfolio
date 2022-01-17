import React from "react";

const Picture = ({ url, caption, side }) => {


  return (
    <div className="picture" style={side !== 'undefined' ? {float: side} : {}}>
      <div className="picture__container">
        <a href={url} target="_blank" rel="noreferr noopener noreferrer">
          <img src={url} alt="shawnipedia" className="picture__image"></img>
        </a>
      </div>
      <div className="picture__caption">{caption}</div>
    </div>
  );
};

export default Picture;
