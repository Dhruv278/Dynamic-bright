import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../Atoms/Logo';
import ServiceIconPNG from '../../Assets/Header/service.png';
import ServiceItem from '../Organisms/Header/ServiceItem'; // Assuming you have a hamburger icon
import HamburgerIconPNG from  '../../Assets/Header/Hamburger.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <LogoSection>
        <Logo height={100} width={100} />
      </LogoSection>

      <Hamburger onClick={toggleMenu}>
        <HamburgerImg src={HamburgerIconPNG} alt="Menu" />
      </Hamburger>
      <ContentSection  className={menuOpen ? 'open' : ''}>

      <MainSection className={menuOpen ? 'open' : ''}>
        <ServiceItem icon={ServiceIconPNG} itemName="Industry Sector" />
        <HorizontalLine />
        <ServiceItem icon={ServiceIconPNG} itemName="Service" />
        <HorizontalLine />
        <ServiceItem icon={ServiceIconPNG} itemName="Corporate" />
        <HorizontalLine />
        <ServiceItem icon={ServiceIconPNG} itemName="Resource" />
      </MainSection>

      <RightSection  className={menuOpen ? 'open' : ''}>
        <Button>Talk To Us</Button>
      </RightSection>
      </ContentSection>
    </Container>
  );
};

export default Header;

// Styled components
const Container = styled.div`
  display: flex;
  max-width: 97%;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0px;
  }
`;

const LogoSection = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
    padding: 10px 0;
  }
`;

const MainSection = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  
  @media (max-width: 1000px) {
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;

    &.open{
      flex-direction:column;
      min-height:450px;
    }
  }
`;

const RightSection = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  @media (max-width: 1000px) {
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  }
`;

const HorizontalLine = styled.div`
  width: 1px;
  height: 50px;
  background: #dfdfdf;
  margin: 0px 20px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 180px;
  height: 50px;
  border: none;
  border-radius: 40px;
  background-color: red;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff4d4d;
    transform: scale(1.05);
  }

  @media (max-width: 1000px) {
    width: 200px;
    max-width: 300px;
    font-size: 16px;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: block;
    z-index: 100;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const HamburgerImg = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }
`;

const ContentSection=styled.div`
width:85%;
display:flex;
align-items:center;
justify-content:center;

 @media (max-width: 1000px) {
    flex-direction: column;
    justify-content:normal;
    width: 100%;
    height: 0;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transition: max-height 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
    padding: 0;

    &.open {
      height: 100vh;
      opacity: 1;
      visibility: visible;
      padding-top: 10px;
    }
  }
`;