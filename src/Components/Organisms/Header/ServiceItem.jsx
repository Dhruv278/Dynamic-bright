import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DownIconPNG from '../../../Assets/Header/down-icon.png';


const ServiceItem= ({ icon, itemName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu open/close on click
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Open the menu on hover
  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  // Close the menu on mouse leave
  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ItemContainer
      ref={menuRef}
      onClick={handleToggleMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ItemDataContainer>
        <Item>{itemName}</Item>
      </ItemDataContainer>
      <Underline className={isMenuOpen ? 'active' : ''} />
      {isMenuOpen && (
        <DropdownMenu>
          {itemName}
        </DropdownMenu>
      )}
    </ItemContainer>
  );
};

export default ServiceItem;
// Styled components
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemDataContainer = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 764px) {
    margin: 20px 0;
    min-width: 221px;
  }
`;

const Item = styled.div`
  text-transform: uppercase;
  margin: 0 10px;
  font-size: 18px;
  position: relative;
  transition: color 0.3s ease;
  color:#3a3fa6;
  font-weight:700;
  &:hover {
    color: #1b1d4b;;
  }
`;

const ItemDownIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; /* Adjusted to appear below the item */
  left: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px; /* Adjust padding as needed */
  border-radius: 8px;
  z-index: 100;
  animation: fadeIn 0.3s ease forwards;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  width:100%;
  @keyframes fadeIn {
    to {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    margin: 10px 0;
    font-size: 0.9rem;
    color: #666;
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #1b1d4b;
  transition: width 0.3s ease;
  &.active {
    width: 100%;
  }
`;
