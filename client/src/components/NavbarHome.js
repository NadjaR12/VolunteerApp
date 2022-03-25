import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function NavbarHome (){
    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
      setShowMenu(!showMenu)
    }
    return(
        <>
        <nav className="nav-home">
        <div className="nav-links-container-home">
            <div><Link className="nav-link-home" to='/Projects'>PROJECTS</Link></div> 
            <div>|</div>
            <div><Link className="nav-link-home" to='/Events'>EVENTS</Link></div>
        </div>
      </nav>
      </>
    )
}