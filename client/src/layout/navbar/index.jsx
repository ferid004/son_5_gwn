import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
      <NavLink to={'/'}>HOME</NavLink>
      <NavLink to={'/add'}>ADD</NavLink>
      <NavLink to={'/wishlist'}>WISHLIT</NavLink>
    </div>
  )
}

export default Navbar