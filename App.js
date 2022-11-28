
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";


import FooterBanner from "./component/FooterBanner";
import HeroBanner from "./component/HeroBanner";
import Product from "./component/Product";
import client from './lib/client'

function App() {

  const [bannerData , setBannerData] = useState([]);

  const[productData,  setProductData]= useState([]);

  
  useEffect (() => {


    const bannerQuery = '*[_type == "banner" ]' ;

    client.fetch(bannerQuery)
      .then((data) => setBannerData(data))


    const query = '*[_type == "product" ]' ;

      client.fetch(query)
        .then((data) => setProductData(data)) 

  
    
   
    
  }, [])


  return (
    <React.Fragment>



    <Routes>

     <Route  path = '/' element = {

   <div> <HeroBanner heroBanner = {bannerData.length >0 && bannerData[0] }/>
      
      <div className="products-heading">
      <h2>Best Seller Product</h2>
      <p>Sound like heaven</p>
      </div>
     
      </div> }  />

      </Routes>
 
     <div className="products-container">
      { productData?.map(data =>        
         <Product
          key = {data._id}
          products = {data}

          />

       )
      
      }

      </div>
      

      <Routes>

      <Route path="/" element = {<FooterBanner footerBanner ={bannerData.length >0  && bannerData[0]} />} />
      

      </Routes>



      {/* <HeroBanner heroBanner = {bannerData.length >0 && bannerData[0] }/>
      
      <div className="products-heading">
      <h2>Best Seller Product</h2>
      <p>Sound like heaven</p>
      </div>
      <div className="products-container">
      { productData?.map(data =>        
         <Product
          key = {data._id}
          products = {data}

          />

       )
      
      }
      </div>
     
      <FooterBanner footerBanner ={bannerData.length >0  && bannerData[0]}/> */}

     
      
    </React.Fragment>
  );
}

export default App;
