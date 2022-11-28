import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import urlFor from '../imageUrl';

const FooterBanner = ({footerBanner}) => {

  console.log(footerBanner);

const {discount, image, buttonText, largeText1, largeText2, smallText, midText, saleTime, desc, product } = footerBanner;



  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>

       <div className='left' >
         <p>{discount} OFF</p>
         <h3>{largeText1}</h3>
         <h3>{largeText2}</h3>
         <p>{saleTime}</p>
       </div>
       <div className='right'>
         <p>{smallText}</p>
         <h3>{midText}</h3>
         <p>{desc}</p>
         <Link to = {`/product/${product}`}>
          <Button type='button'>{buttonText}</Button>
         </Link>
       </div>

       <img src= {image && urlFor(image).url()} alt = "Headphone" className='footer-banner-image' />

      </div>
    </div>
  )
}

export default FooterBanner