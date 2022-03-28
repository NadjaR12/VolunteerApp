import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarVisitor () {

    return(
        <nav className="nav-visitor">
            <div className="nav-links-container">
                <Link className="nav-link" to="/Projects">PROJECTS</Link> 
                |
                <Link className="nav-link" to="/Events">EVENTS</Link>
                |
                <Link className="nav-link" to="/">HOME</Link>
            </div>
        </nav>
    )
}