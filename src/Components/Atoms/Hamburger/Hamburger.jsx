// HamburgerMenu.tsx
import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  width: 30px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Line = styled.div`
  height: 4px;
  width: 100%;
  background-color: ${({ isOpen }) => (isOpen ? '#3a3fa6' : '#3a3fa6')};
  border-radius: 4px;
  transition: all 0.3s ease;

  &:nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'none')};
  }
  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
  }
`;


const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <MenuContainer onClick={toggleMenu}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </MenuContainer>
  );
};

export default HamburgerMenu;
