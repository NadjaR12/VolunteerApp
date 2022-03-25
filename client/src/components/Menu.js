import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css'

export default function Menu() {
  return (
    <div className='menu-container'>
        <div className='about-rotate'>
        <a className="menu-link animate__animated animate__fadeInDown" href='#about'>ABOUT</a>
        {/* <hr className='menu-hr animate__animated animate__fadeInUp'></hr> */}
        </div>
        <div className='gallery-rotate'>
        <a className="menu-link animate__animated animate__fadeInDown" href='#gallery'>GALLERY</a>
        {/* <hr className='menu-hr animate__animated animate__fadeInUp'></hr> */}
        </div>
        <div className='music-rotate'>
        <a className="menu-link animate__animated animate__fadeInDown" href='#music'>MUSIC</a>
        {/* <hr className='menu-hr animate__animated animate__fadeInUp'></hr> */}
        </div>
        <div>
        <Link className='menu-link animate__animated animate__fadeInDown' to={'/projects'}>PROJECTS</Link>
        {/* <hr className='menu-hr animate__animated animate__fadeInUp'></hr> */}
        </div>
        <div>
        <Link className='menu-link animate__animated animate__fadeInDown' to={'/events'}>EVENTS</Link>
        {/* <hr className='menu-hr animate__animated animate__fadeInUp'></hr> */}
        </div>
    </div>
  )
}
