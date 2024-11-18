import React from 'react'
import Companyinfo from '../../../Molecules/Home/CompanyInfo/Companyinfo'
import "./MainSectionCarosaul.scss";

const MainSectionCarosaul = () => {
  return (
    <div className='main-section-container'>
        <Companyinfo />
        <div>
            <div className='home_btn_container'>
                <div className='join_us'>Join Us</div>
                <div className='ask_questions'>Ask for Quote</div>
            </div>
        </div>
    </div>
  )
}

export default MainSectionCarosaul