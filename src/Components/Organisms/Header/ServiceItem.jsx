import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DownIconPNG from '../../../Assets/Header/down-icon.png';


const ServiceItem= ({ icon, itemName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu open/close
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <ItemContainer ref={menuRef} onClick={handleToggleMenu} onMouseEnter={handleToggleMenu} onMouseLeave={() => setIsMenuOpen(false)}>
      <ItemDataContainer>

      {/* <ItemIcon src={icon} /> */}
      <Item>{itemName}</Item>
      <ItemDownIcon src={DownIconPNG} />
      </ItemDataContainer>
      <Underline className={isMenuOpen ? 'active' : ''} />
      {isMenuOpen && (
        <DropdownMenu>
          <MenuItem>Service Option 1</MenuItem>
          <MenuItem>Service Option 2</MenuItem>
          <MenuItem>Service Option 3</MenuItem>
        </DropdownMenu>
      )}
    </ItemContainer>
  );
};

export default ServiceItem;

// Styled components
const ItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemDataContainer=styled.div`
display:flex;
position:relative;

@media (max-width:1000px){
  margin:20px 0px;
  min-width:221px;
}
`;

const ItemIcon = styled.img`
  height: 40px;
  width: 40px;
`;

const Item = styled.div`
  text-transform: uppercase;
  margin: 0px 10px;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff6347; // Hover color change
  }
`;

const ItemDownIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  box-shadow:5px 5px 5px black;
  border:1px solid gray;
  padding: 10px;
  border-radius: 8px;
  z-index: 100;
  animation: fadeIn 0.3s ease forwards;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  min-width:300px;
  @keyframes fadeIn {
    to {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #ff6347;
  transition: width 0.3s ease;
  
  &.active {
    width: 100%;
  }
`;
