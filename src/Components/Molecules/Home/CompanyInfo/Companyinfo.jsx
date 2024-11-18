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
                <div className='blue_box'></div>
                <div className='pink_box'></div>
                <div className='orange_box'></div>
                <div className='red_box'></div>
            </div>
        </div>
        <div className='lower_section'>
            <div className='company_logos'>
                  <div className='trustedby_div'>
                  TRUSTED BY:
                  </div>
                  <div className='logo_div'>
                    <img className='logo' src={image.META_ICON}  />
                    <img className='logo' src={image.GOOGLE_ICON}  />
                    <img className='logo' src={image.NETFLIX_ICON}  />
                    <img className='logo' src={image.PandG_ICON}  />
                    <img className='logo' src={image.PAYOVER_ICON}  />
                    <img className='logo' src={image.AIRBNB_ICON}  />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Companyinfo