import React from "react";

const Picture = ({picture}) => {
  return (
    <div className="picture">
      <img src={picture.url} className="picture__image" alt="portfolio"/>
      <div className="picture__caption">{picture.caption}</div>
    </div>
  )
}

export default Picture;