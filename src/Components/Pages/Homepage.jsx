import React from 'react'
import CustomCarousel from '../Organisms/Home/Carosaul'
import styled from 'styled-components';
import TestCustomCarousel from '../Organisms/Home/TestCarosaul';
import Companyinfo from '../Molecules/Home/CompanyInfo/Companyinfo';
//  '../Organisms/Home/TestCarosaul';


const Homepage = () => {
  return (
    <Container>
      <Companyinfo />
      {/* <TestCustomCarousel /> */}
    </Container>
  )
}

export default Homepage;

const Container=styled.div`
@media (max-width:1000px){
overflow-x:hidden;
}
`;