import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import styled, { keyframes,css } from 'styled-components';
import { Services } from '../../../Data/Service';
import RightArrowPNG from '../../../Assets/Services/rightArrow.png';
import RightWhiteArrow from '../../../Assets/Services/rightWhiteArrow.png';
import LeftWhiteArrow from '../../../Assets/Services/leftWhiteArrow.png';


const fadeInUp = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
const fadeRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
`;

const SlideContent = styled.div`
  color: black !important;
  width: 100%;
  height: 500px;
  padding: 40px;
  padding-bottom: 0px;
  @media (max-width: 1000px) {
    height: auto;
    min-height: 800px;
    padding: 20px;
    width:90%;
    padding-bottom: 40px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const TextContent = styled.div`
  max-width: 70%;
  
      @media (max-width: 1000px) {
    max-width: 95%;
  };
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
    visibility: ${({ inView }) => inView ? "visible" : 'hidden'};
    animation: ${({ inView }) => inView ? css`${fadeInUp} 0.2s ease forwards` : 'none'};
  @media (max-width: 1000px) {
    text-align: center;
    font-size: 32px; /* Smaller font for mobile */
  }
`;

const Subheading = styled.p`
  font-size: 18px;
  margin: 20px 0;
    visibility: ${({ inView }) => inView ? "visible" : 'hidden'};
      animation: ${({ inView }) => inView ? css`${fadeInUp} 0.2s ease forwards` : 'none'};
  @media (max-width: 1000px) {
    text-align: justify;
    padding: 10px;
    font-size: 16px; /* Adjust font size for better readability */
  }
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
   visibility: ${({ inView }) => inView ? "visible" : 'hidden'};
    animation: ${({ inView }) => inView ? css`${fadeInUp} 0.2s ease forwards` : 'none'};
 
  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column; /* Stack buttons vertically */
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 30%;
  justify-content: center;
  align-items: end;
   visibility: ${({ inView }) => inView ? "visible" : 'hidden'};
      animation: ${({ inView }) => inView ? css`${fadeRight} 0.4s ease forwards` : 'none'};
  img {
    max-width: 300px;
    border-radius: 8px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ImageResponsiveContainer = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 100%;
    visibility: ${({ inView }) => inView ? "visible" : 'hidden'};
      animation: ${({ inView }) => inView ? css`${fadeRight} 0.4s ease forwards` : 'none'};
    img {
      max-width: 300px; /* Adjust for full responsiveness */
      border-radius: 8px;
    }
  }
`;

const CustomArrow = styled.div`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  background: #000;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;

  &.left {
    left: 20px;
  }

  &.right {
    right: 20px;
  }

  &:hover {
    background-color: #555;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 2.5%;
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media (max-width:1350px){
   position:absolute;

   bottom: 15px;
   width:100%;
   align-items: center;
   justify-content: center;
  }
 
  @media (max-width: 1000px) {
   display:none;
  }
`;

const Arrow = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;

  @media (max-width: 1000px){
  position:absolute;
  top:45%;
  left:2%;
  height:30px;
  width:30px;
  opacity:0.9;
  } 
  `;

const ResponsiveLeftArrow = styled.img`
 display:none;
  @media (max-width: 1000px){
  display:flex;
  position:absolute;
  top:40%;
  left:2%;
  height:30px;
  width:30px;
  opacity:0.9;
  } 
  `;

const ResponsiveRightArrow = styled.img`
 display:none;
  @media (max-width: 1000px){
  display:flex;
  position:absolute;
  top:40%;
  right:2%;
  height:30px;
  width:30px;
  opacity:0.9;
  } 
  `;

const CurrentSlideText = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: white;
  margin: 0px 10px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <CarouselContainer>
      <Carousel
        ref={carouselRef}
        afterChange={(current) => setCurrentSlide(current)}
        dots={false}
      >
        {Services.map((service, index) => (
          <div key={index}>
            <SlideContent >
              <ContentSection>
                <TextContent >
                  <Heading inView={index===currentSlide}>{service.name}</Heading>
                  <ImageResponsiveContainer inView={index===currentSlide}>
                    <img src={service.coverImage} alt="Service" />
                  </ImageResponsiveContainer>
                  <Subheading inView={index===currentSlide}>{service.description}</Subheading>
                  <ButtonGroup inView={index===currentSlide}>
                    <ExploreButton>Explore <RightArrow src={RightArrowPNG} /></ExploreButton>
                    <RequestForCallButton>Request For Call</RequestForCallButton>
                  </ButtonGroup>
                </TextContent>
                <ImageContainer inView={index===currentSlide}>
                  <img src={service.coverImage} alt="Service" />
                </ImageContainer>
              </ContentSection>
            </SlideContent>
          </div>
        ))}
      </Carousel>
      <ArrowContainer>
        <Arrow src={LeftWhiteArrow} onClick={prevSlide} />
        <CurrentSlideText>{currentSlide + 1} of {Services.length}</CurrentSlideText>
        <Arrow src={RightWhiteArrow} onClick={nextSlide} />
      </ArrowContainer>
      <ResponsiveLeftArrow src={LeftWhiteArrow} onClick={prevSlide} />
      <ResponsiveRightArrow src={RightWhiteArrow} onClick={prevSlide} />
    </CarouselContainer>
  );
};

export default CustomCarousel;

const ExploreButton = styled.div`
  width: 155px;
  height: 50px;
  background-color: red;
  color: white;
  border-radius: 40px;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 16px;
    width: 160px;
    margin-bottom: 10px; /* Add margin for stacked buttons */
  }
`;

const RightArrow = styled.img`
  height: 30px;
  width: 35px;
  margin-left: 10px;
  margin-top: 2px;

  @media (max-width: 1000px) {
    height: 24px;
    width: 28px;
  }
`;

const RequestForCallButton = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  margin-left: 30px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 40px;

  @media (max-width: 1000px) {
    font-size: 16px;
    width: 160px;
    margin-left:0;
  }
`;
