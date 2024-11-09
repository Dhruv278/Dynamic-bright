import React from 'react'
import "./Companyinfo.scss"
import { image } from '../../../../utils/image'

const Companyinfo = () => {
  return (
    <div className='company_info_home'>
        <div className='upper_section'>
            <div className='text_section'>
                <div className='heading_text'>
                Scale your Professionals
                </div>
                <div className='sub_heading_text'>
                We connect people to the organization
                </div>
                <div className='description'>
                Shape your ultimate team, cover skill gaps, and scale smoothly with our platform.
                </div>
            </div>
            <div className='image_section'>
                <img src={image.DEFAULT_PERSON} className='main_image'/>
            </div>
        </div>
    </div>
  )
}

export default Companyinfo