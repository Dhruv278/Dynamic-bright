import React from 'react';
import "./OfferSection.scss"
import { image } from '../../../utils/image';

const OfferSection = () => {
  return (
    <div className='offer-section-container'>
      
        <div className='header'>
        WHAT &nbsp;WE &nbsp;OFFER
        <div className='header_div'></div>
        </div>
        <div className='title_container'>
            <div className='title'>Explore more about how we can help you take care of what’s precious</div>
        </div>
        <div className='offer_container'> 
          <div className='offer-card' style={{backgroundImage:`url(${image.CONSTRUCTION_WORKER_IMAGE})`}}>
              <div  className='card-text-container'>
                <div>Housekeeping Facility
                    Management Service 1</div>
              </div>
              <button className='explore-btn'>
                  Explore 
                  <img src={image.RIGHT_ARROW_WHITE} />
              </button>
            </div>
            <div className='offer-card' style={{backgroundImage:`url(${image.CONSTRUCTION_WORKER_IMAGE})`}}>
              <div  className='card-text-container'>
                <div>Housekeeping Facility
                    Management Service 2</div>
              </div>
              <button className='explore-btn'>
                  Explore 
                  <img src={image.RIGHT_ARROW_WHITE} />
              </button>
            </div>
            <div className='offer-card' style={{backgroundImage:`url(${image.CONSTRUCTION_WORKER_IMAGE})`}}>
              <div  className='card-text-container'>
                <div>Housekeeping Facility
                    Management Service 3</div>
              </div>
              <button className='explore-btn'>
                  Explore 
                  <img src={image.RIGHT_ARROW_WHITE} />
              </button>
            </div>
            <div className='offer-card' style={{backgroundImage:`url(${image.CONSTRUCTION_WORKER_IMAGE})`}}>
              <div  className='card-text-container'>
                <div>Housekeeping Facility
                    Management Service 4</div>
              </div>
              <button className='explore-btn'>
                  Explore 
                  <img src={image.RIGHT_ARROW_WHITE} />
              </button>
            </div>
            <div className='offer-card' style={{backgroundImage:`url(${image.CONSTRUCTION_WORKER_IMAGE})`}}>
              <div  className='card-text-container'>
                <div>Housekeeping Facility
                    Management Service 5</div>
              </div>
              <button className='explore-btn'>
                  Explore 
                  <img src={image.RIGHT_ARROW_WHITE} />
              </button>
            </div>
          
        </div>
    </div>
  )
}

export default OfferSection