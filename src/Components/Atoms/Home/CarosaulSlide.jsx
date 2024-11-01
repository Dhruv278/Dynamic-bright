// Slide.tsx
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import RightArrowPNG from '../../../Assets/Services/rightArrow.png';

const fadeInUp = keyframes`
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SlideContent = styled.div`
  width: 100%;
  height: 500px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  
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
  color: black;
  animation: ${({ inView }) => inView ? css`${fadeInUp} 0.8s ease forwards` : 'none'};
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
  color: black;
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
  border: 2px solid black;
  color: black;
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

const Slide = ({ service }) => {
  // Use useInView hook for slide animation
  const { ref, inView } = useInView({ triggerOnce: true ,threshold:0.9});

  return (
    <div>
      <SlideContent ref={ref} inView={inView}>
        <ContentSection>
          <TextContent>
            <Heading>{service.name}</Heading>
            <ImageResponsiveContainer>
              <img src={service.coverImage} alt="Service" />
            </ImageResponsiveContainer>
            <Subheading>{service.description}</Subheading>
            <ButtonGroup>
              <ExploreButton>
                Explore <img src={RightArrowPNG} alt="Right Arrow" />
              </ExploreButton>
              <RequestForCallButton>Request For Call</RequestForCallButton>
            </ButtonGroup>
          </TextContent>
          <ImageContainer>
            <img src={service.coverImage} alt="Service" />
          </ImageContainer>
        </ContentSection>
      </SlideContent>
    </div>
  );
};

export default Slide;
