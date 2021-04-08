import React, {useState} from "react";
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";

const Picture = ({ pictures }) => {

  return (
    <div className="picture">
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={400}
        infinite={true}
        totalSlides={pictures.length}
      >
        <div className="picture__containter">
          <Slider>
            {pictures.map((pic, i) => (
              <Slide index={i} key={`picture-${i}`}>
                {console.log("picture", pic)}
                <img
                  src={pic.url}
                  alt={"shawnipedia"}
                  className="picture__image"
                ></img>
                <div className="picture__caption">{pictures[i].caption}</div>
              </Slide>
            ))}
          </Slider>
          {pictures.length > 1 ? (
            <div className="picture__navigation">
              <ButtonBack> &larr;  </ButtonBack>
              <ButtonNext> &rarr; </ButtonNext>
            </div>
          ) : null}
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Picture;
