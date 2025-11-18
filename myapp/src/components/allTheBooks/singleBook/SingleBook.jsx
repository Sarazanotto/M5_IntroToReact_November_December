import React from 'react'
import './style.css'



const SingleBook = ({image, alt}) => {
  return (
   <>
   <img className='imageBook img-fluid' src={image} alt={alt} />
  </>
  )
}

export default SingleBook