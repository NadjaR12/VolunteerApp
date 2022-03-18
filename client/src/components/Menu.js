import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css'

export default function Menu() {
  return (
    <div className='menu-container'>
        <div className='about-rotate'>
        <Link className="menu-link animate__animated animate__fadeInUp" to={'/about'}>ABOUT</Link>
        {/* <hr className='menu-hr animate__animated animate__fadeInUp'></hr> */}
        </div>
        <div className='gallery-rotate'>
        <Link className='menu-link animate__animated animate__fadeInUp' to={'/gallery'}>GALLERY</Link>
        {/* <hr className='menu-hr animate__animated animate__fadeInUp'></hr> */}
        </div>
        <div className='music-rotate'>
        <Link className='menu-link animate__animated animate__fadeInUp' to={'/music'}>MUSIC</Link>
        {/* <hr className='menu-hr animate__animated animate__fadeInUp'></hr> */}
        </div>
    </div>
  )
}
