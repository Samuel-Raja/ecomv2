import React from 'react'

import {AiOutlineCopyrightCircle, AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai'

const Footer = () => {

  

  return (
    <div className='footer-container'>
      <p>2022 Magic Sound <AiOutlineCopyrightCircle /> All right reserved  </p>
    
    <p className='icons'>
      <AiOutlineTwitter/>
      <AiOutlineInstagram/>
      <AiOutlineFacebook/>
    </p>
    </div>
  )
}

export default Footer