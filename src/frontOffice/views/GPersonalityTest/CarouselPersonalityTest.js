import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/DISC.jpg";
import D from "../../assets/images/DISC-D.jpg";
import I from "../../assets/images/DISC-I.jpg";
import S from "../../assets/images/DISC-S.jpg";
import C from "../../assets/images/DISC-C.jpg";

const CarouselPersonalityTest = () => (
  <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-60"
        src={D}
        alt="First slide"
      />
      <Carousel.Caption>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-60"
        src={I}
        alt="First slide"
      />
      <Carousel.Caption>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-60"
        src={S}
        alt="First slide"
      />
      <Carousel.Caption>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-60"
        src={C}
        alt="First slide"
      />
      <Carousel.Caption>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    
  </Carousel>
);

export default CarouselPersonalityTest;