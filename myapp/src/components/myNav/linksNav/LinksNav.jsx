import React from 'react'
import { Nav } from 'react-bootstrap'
import './style.css'
const LinksNav = () => {
  return (
    <div className='container-links d-flex flex-column flex-md-row gap-5'>
      <Nav.Link className='link'href='#'>  Home</Nav.Link>
      <Nav.Link className='link'href='#'>  About</Nav.Link>
      <Nav.Link className='link'href='#'>  Browser</Nav.Link>
    </div>
  )
}

export default LinksNav