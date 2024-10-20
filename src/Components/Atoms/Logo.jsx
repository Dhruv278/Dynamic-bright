import React from 'react';
import styled from 'styled-components';
import LogoPNG from '../../Assets/Logo/Web-logo.svg'

const Logo = ({height,width}) => {
  return (
    <Container style={{height:`${height}px` ,width:`${width}px`}}>
        <LogoImg src={LogoPNG} alt={"Dynamic Bright"} />
    </Container>
  )
}

export default Logo;

const Container=styled.div``;

const LogoImg=styled.img`
width:100%;
height:100%;
`;