import React from 'react';
import styled from 'styled-components';

const Logo = ({height,width}) => {
  return (
    <Container style={{height:`${height}px` ,width:`${width}px`}}>
        <LogoImg src={'https://placehold.co/600x400/EEE/31343C'} alt={"Dynamic Bright"} />
    </Container>
  )
}

export default Logo;

const Container=styled.div``;

const LogoImg=styled.img`
width:100%;
height:100%;
`;