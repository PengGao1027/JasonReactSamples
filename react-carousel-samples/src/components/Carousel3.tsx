import React from "react";
import { slides } from "../data/Slides";
import "./Carousel3.css";
type CarouselProps = {
  children: React.ReactNode; //👈 children prop typr
};

const Carousel3 = (props: CarouselProps) => {
  return <>{props.children}</>;
};

export default Carousel3;
