import React from 'react'


import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container' >
     <Link to = "/">
     <p className='logo'>Magic Sound</p>
     </Link>
     <button type='button' className='cart-icon'>
      <AiOutlineShoppingCart />
      <span className='cart-item-qty'>0</span>
     </button>

    </div>
  )
}

export default Navbar