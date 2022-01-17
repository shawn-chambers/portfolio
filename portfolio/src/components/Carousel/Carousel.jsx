import React from "react";
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";

const Carousel = ({ pictures }) => {
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
                <a href={pic.url} target="_blank" rel="noreferr noopener noreferrer">
                  <img
                    src={pic.url}
                    alt={"shawnipedia"}
                    className="picture__image"
                  ></img>
                </a>
                <div className="picture__caption">{pictures[i].caption}</div>
              </Slide>
            ))}
          </Slider>
          {pictures.length > 1 ? (
            <div className="picture__navigation">
              <ButtonBack> &larr; </ButtonBack>
              <ButtonNext> &rarr; </ButtonNext>
            </div>
          ) : null}
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Carousel;
