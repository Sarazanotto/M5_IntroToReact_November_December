import React from 'react'
import MyNav from '../myNav/MyNav'
import MyFooter from '../footer/MyFooter'

const MainLayout = ({children}) => {
  return (
    <div className={'d-flex flex-column justify-content-between min-vh-100'}>
      <MyNav/>
      {children}
      <MyFooter/>
    </div>
  )
}

export default MainLayout
