//https://www.youtube.com/watch?v=CMg_1KxpM_4
//https://www.youtube.com/watch?v=SK9AlIbexOE
import React, { useState } from "react";
import CSS from "csstype";
import { Slides } from "../../data/Slides";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const slideStyles: CSS.Properties = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const arrowStyles: CSS.Properties = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};
const leftArrowStyles: CSS.Properties = {
  left: "32px",
};
const rightArrowStyles: CSS.Properties = {
  right: "32px",
};

const sliderStyles: CSS.Properties = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle: CSS.Properties = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const Carousel1 = () => {
  //
  const [currentIndex, setCurrentIndex] = useState(0);
  //
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  //
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${Slides[currentIndex].imgUrl})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={{ ...arrowStyles, ...leftArrowStyles }}>
          <BsFillArrowLeftCircleFill />
        </div>
        <div onClick={goToNext} style={{ ...arrowStyles, ...rightArrowStyles }}>
          <BsFillArrowRightCircleFill />
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {Slides.map((item: any, slideIndex: number) => (
          <div style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            {slideIndex === currentIndex ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel1;
