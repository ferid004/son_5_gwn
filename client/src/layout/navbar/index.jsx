import React, { useState } from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div id='navbar'>
      <div className="dev_navbar">

        <div className="title">
          <img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" />
        </div>
        <div className="links">
          <NavLink className={"navLink"} to={'/'}>HOME</NavLink>
          <Link className={"navLink"}>about</Link>
          <Link className={"navLink"}>services</Link>
          <Link className={"navLink"}>case study</Link>
          <Link className={"navLink"}>blog</Link>
          <Link className={"navLink"}>contact</Link>
          <NavLink className={"navLink"} to={'/add'}>ADD</NavLink>
          <NavLink className={"navLink"} to={'/wishlist'}>WISHLIT</NavLink>
        </div>
        <div className="butonandcall container">
          <div className='btn'>Free Quote</div>
          <div className="call">
            <div className="icon container">
              <div className="left">

                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="right">
                <p> Have any Question?</p>
                <a href="">call:10 78 999 88</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="mobil_navbar">

        <div className="title">
          <img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" />
        </div>
        <div className={`links ${isOpen ? "blockelement" : ""}`}>
          <NavLink className={"navLink"} to={'/'}>HOME</NavLink>
          <Link className={"navLink"}>about</Link>
          <Link className={"navLink"}>services</Link>
          <Link className={"navLink"}>case study</Link>
          <Link className={"navLink"}>blog</Link>
          <Link className={"navLink"}>contact</Link>
          <NavLink className={"navLink"} to={'/add'}>ADD</NavLink>
          <NavLink className={"navLink"} to={'/wishlist'}>WISHLIT</NavLink>
        </div>
        <div className="butonandcall container">
          <div className='btn'>Free Quote</div>
          <div className="call">
            <div className="icon container">
              <div className="left">

                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="right">
                <p> Have any Question?</p>
                <a href="">call:10 78 999 88</a>
              </div>
            </div>

          </div>
        </div>
        <div className="hamburger">
          <div onClick={()=>setIsOpen(!isOpen)}>
            <i className={`fa-solid fa-${isOpen?"bars":"xmark"}`}></i>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar