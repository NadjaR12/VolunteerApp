import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='menu-container'>
        <div className='about-rotate'>
        <Link className="menu-link" to={'/about'}>ABOUT</Link>
        <hr className='menu-hr'></hr>
        </div>
        <div className='gallery-rotate'>
        <Link className='menu-link' to={'/gallery'}>GALLERY</Link>
        <hr className='menu-hr'></hr>
        </div>
        <div className='music-rotate'>
        <Link className='menu-link' to={'/music'}>MUSIC</Link>
        <hr className='menu-hr'></hr>
        </div>
    </div>
  )
}
