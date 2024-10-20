import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { Services } from '../../../Data/Service';
import RightArrowPNG from '../../../Assets/Services/rightArrow.png';
import RightWhiteArrow from '../../../Assets/Services/rightWhiteArrow.png';
import LeftWhiteArrow from '../../../Assets/Services/leftWhiteArrow.png';

// Updated styling
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #f0f2f5, #fff);
`;

const SlideContent = styled.div`
  width: 100%;
  height: 500px;
  padding: 40px;
  background: ${({ gradient }) => gradient};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    min-height: 600px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  max-width: 60%;
  color: white;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px 25px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ExploreButton = styled(Button)`
  background-color: #ff5e5e;
  color: white;
`;

const RequestForCallButton = styled(Button)`
  background-color: transparent;
  border: 2px solid white;
  color: white;
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 30%;
  img {
    width: 100%;
    border-radius: 15px;
    transition: transform 0.3s ease;
  }
  img:hover {
    transform: scale(1.05);
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
    img {
      max-width: 100%;
      border-radius: 15px;
    }
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: center;
  }
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
  color: white;
  margin: 0 10px;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
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
          <div key={index}>
            <SlideContent gradient={service.gradient}>
              <ContentSection>
                <TextContent>
                  <Heading>{service.name}</Heading>
                  <ImageResponsiveContainer>
                    <img src={service.coverImage} alt={service.name} />
                  </ImageResponsiveContainer>
                  <Subheading>{service.description}</Subheading>
                  <ButtonGroup>
                    <ExploreButton>Explore</ExploreButton>
                    <RequestForCallButton>Request For Call</RequestForCallButton>
                  </ButtonGroup>
                </TextContent>
                <ImageContainer>
                  <img src={service.coverImage} alt={service.name} />
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
    </CarouselContainer>
  );
};

export default TestCustomCarousel;
