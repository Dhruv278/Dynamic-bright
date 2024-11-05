import React,{useState} from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: auto;
  padding: 40px;
  background: linear-gradient(90deg, #222, #E6202B);
  border-radius: 8px;
`;

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 400px;
`;

const TextContent = styled.div`
  max-width: 50%;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;

const Subheading = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  
  button {
    background-color: #E6202B;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-right: 15px;
    
    &:hover {
      background-color: #ae191f;
    }
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  img {
    max-width: 300px;
    border-radius: 8px;
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

const SlideIndex = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`;

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] =useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 6);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 5 : prev - 1));
  };

  return (
    <CarouselContainer>
      <Carousel afterChange={(current) => setCurrentSlide(current)} dots={false}>
        <div>
          <SlideContent>
            <TextContent>
              <Heading>Right Facility Management Services</Heading>
              <Subheading>
                Powered by integrated management, we deliver Facilities Management solutions 
                that connect and elevate all aspects of your operations.
              </Subheading>
              <ButtonGroup>
                <button>Explore</button>
                <button>Request for Call</button>
              </ButtonGroup>
            </TextContent>
            <ImageContainer>
              <img src="https://via.placeholder.com/300" alt="Person" />
            </ImageContainer>
          </SlideContent>
        </div>
        {/* Add more slides similarly */}
      </Carousel>

      <CustomArrow className="left" onClick={prevSlide}>
        &lt;
      </CustomArrow>
      <CustomArrow className="right" onClick={nextSlide}>
        &gt;
      </CustomArrow>

      <SlideIndex>{currentSlide + 1} of 6</SlideIndex>
    </CarouselContainer>
  );
};

export default CustomCarousel;


