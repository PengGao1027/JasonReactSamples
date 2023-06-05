/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import CSS from "csstype";
import { slides } from "../data/slides";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import "./Carousel2.css";

type CarouselItemProps = {
  key: string | number;
  item: { title: string; imgUrl: string; description: string };
};

export const CarouselItem = (item: CarouselItemProps) => {
  return (
    <div className="carousel-item">
      <img className="carousel-img" src={item.item.imgUrl} />
    </div>
  );
};

const Carousel2 = () => {
  //
  const [currentIndex, setCurrentIndex] = useState(0);
  //
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="slides" style={{ transform: `translate(-${currentIndex * 100}%)` }}>
        {slides.map((item, idx) => {
          return <CarouselItem key={idx} item={item} />;
        })}
      </div>
      <div className="function-div">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(currentIndex - 1);
          }}
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <div className="indicator">
          {slides.map((item, index) => {
            if (index === currentIndex) {
              return (
                <button key={item.title} className="button-indicator">
                  <IoMdRadioButtonOn />
                </button>
              );
            } else {
              return (
                <button key={item.title} className="button-indicator" onClick={() => updateIndex(index)}>
                  <IoMdRadioButtonOff />
                </button>
              );
            }
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(currentIndex + 1);
          }}
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Carousel2;
