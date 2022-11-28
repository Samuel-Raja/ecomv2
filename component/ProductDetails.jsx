import React from 'react'
import urlFor from '../imageUrl';

const ProductDetails = ({products}) => {

  const  {image, slug, details, name, price} = products ;

  return (
    <div>
      <div className='product-detail-container'>
      <div>
        <div className='product-detail-image' >
          <img src= {image && urlFor(image[0]).url()} alt="headphone" width={350} height={350} />
        </div>
        <div className='small-images-container'>
          { image?.map((item, i) => (
             
             <img
              src= {item && urlFor(item).url()}
               alt = "Headphone"
               className='small-image'

              
             />
            
          ) )
          
           }
        </div>
        <div className='product-detail-desc'>
          <h1>{name}</h1>
        </div>
      </div>

      </div>
    </div>
  )
}

export default ProductDetails