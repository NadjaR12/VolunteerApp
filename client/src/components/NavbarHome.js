import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarHome (){
  
    return(
    <>
        <nav className="nav-home">
            <div className="nav-links-container-home">
                <div><Link className="nav-link-home" to="/Projects">PROJECTS</Link></div> 
                <div>|</div>
                <div><Link className="nav-link-home" to="/Events">EVENTS</Link></div>
            </div>
        </nav>
    </>
    )
}