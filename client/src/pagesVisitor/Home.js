import React, { useState } from 'react'
import NavbarHome from '../components/NavbarHome'
import Menu from '../components/Menu'

export default function Home() {
const [showMenu, setShowMenu] = useState(false)

const handleMenu = () => {
  setShowMenu(!showMenu)

}

  return (
  <div className="home-container">
  <div className="home-overlay">
    <NavbarHome />
    <div className="heading-project-container"></div>
    <div>
      <div className="logo-container">
      {showMenu && (
                  <Menu />
                )}
        <img className={showMenu ? "logo animation-container-open-menu" : "logo animation-container"} onClick={handleMenu} src="/images/disco-ball-png-27276.png" alt="Logo"/>
      </div>
    </div>
    <footer className="footer">
      <a className="footer-link" href="https://www.facebook.com/ramschakl"><img className="icon" src="/images/fb.png" alt="Logo"/></a>
      <a className="footer-link" href="https://soundcloud.com/ramschakl" ><img className="icon" src="/images/sc.png" alt="Logo"/></a>
    {/* doesn't work yet */}
    {/* <a className="footer-link" href=""><img className="icon" src="/images/mail.png" alt="Logo"/></a> */}
    </footer>
  </div>
  </div>
  )
}
