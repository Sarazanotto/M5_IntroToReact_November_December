import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import LinksNav from './linksNav/LinksNav'


const MyNavDesktop = () => {
  return (
   <Navbar className='d-none d-md-flex'>
    <LinksNav/>
   </Navbar>
  )
}

export default MyNavDesktop