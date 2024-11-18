import React from 'react'
import styled from 'styled-components';
import MainSectionCarosaul from '../Organisms/Home/HomeSection/MainSectionCarosaul';
import OfferSection from '../Organisms/OfferSection/OfferSection';
//  '../Organisms/Home/TestCarosaul';


const Homepage = () => {
  return (
    <Container>
      <MainSectionCarosaul />
      <OfferSection />
    </Container>
  )
}

export default Homepage;

const Container=styled.div`
@media (max-width:1000px){
overflow-x:hidden;
}
`;