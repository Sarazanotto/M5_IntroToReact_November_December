import React from 'react'
import { Nav } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../context/cartContext'
import { ShoppingBasket } from 'lucide-react'
const LinksNav = () => {
    const { cartCount } = useContext(CartContext);
  return (
    <div className='container-links d-flex flex-column flex-md-row gap-5'>
      <Link to='/'className='nav-link link'>Home</Link>
      <Link to='/'className='nav-link link'>About</Link>
      <Link to='/'className='nav-link link'>Broswer</Link>
        <div className="d-flex gap-1 align-items-center">
        <ShoppingBasket size={"20px"} />
        <p className="m-0">{cartCount}</p>
      </div>
    </div>
  )
}

export default LinksNav