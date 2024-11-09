import React from 'react';
import './Carosaul.scss';
import {Carousel} from 'antd'

const Carosaul = ({children}) => {
  return (
    <div className='carosaul'>
        <Carousel >
           {
            children
           }
        </Carousel>
    </div>
  )
}

export default Carosaul