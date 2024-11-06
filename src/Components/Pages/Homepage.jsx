import React from 'react'
import CustomCarousel from '../Organisms/Home/Carosaul'
import styled from 'styled-components';
import TestCustomCarousel from '../Organisms/Home/TestCarosaul';
//  '../Organisms/Home/TestCarosaul';


const Homepage = () => {
  return (
    <Container>
      <CustomCarousel />
      {/* <TestCustomCarousel /> */}
    </Container>
  )
}

export default Homepage;

const Container=styled.div`
<<<<<<< HEAD

=======
@media (max-width:1000px){
overflow-x:hidden;
}
>>>>>>> dev
`;