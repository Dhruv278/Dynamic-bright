import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { Services } from '../../../Data/Service';
import RightWhiteArrow from '../../../Assets/Services/rightWhiteArrow.png';
import LeftWhiteArrow from '../../../Assets/Services/leftWhiteArrow.png';
import Slide from '../../Atoms/Home/CarosaulSlide'; // Import the new Slide component

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #f0f2f5, #fff);
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`;

const Arrow = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const CurrentSlideText = styled.div`
  font-size: 1.2rem;
  color: black;
  margin: 0 10px;
`;

const TestCustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselTestRef = useRef(null);

  const nextSlide = () => {
    if (carouselTestRef?.current) carouselTestRef?.current?.next();
  };

  const prevSlide = () => {
    if (carouselTestRef.current) carouselTestRef.current?.prev();
  };

  return (
    <CarouselContainer>
      <Carousel
        ref={carouselTestRef}
        afterChange={(current) => setCurrentSlide(current)}
        dots={false}
      >
        {Services.map((service, index) => (
          <Slide key={index} service={service} /> // Use the Slide component here
        ))}
      </Carousel>
      <ArrowContainer>
        <Arrow src={LeftWhiteArrow} onClick={prevSlide} />
        <CurrentSlideText>{currentSlide + 1} of {Services.length}</CurrentSlideText>
        <Arrow src={RightWhiteArrow} onClick={nextSlide} />
      </ArrowContainer>
    </CarouselContainer>
  );
};

export default TestCustomCarousel;
