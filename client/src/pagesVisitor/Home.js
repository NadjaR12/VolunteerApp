import React, { useState } from 'react'
import NavbarHome from '../components/NavbarHome'
import Menu from '../components/Menu'

export default function Home() {
const [showMenu, setShowMenu] = useState(false)

const handleMenu = () => {
  setShowMenu(!showMenu)

}

  return (
  <>
    <div className="home-container fixed-background">
    <div className="home-overlay fixed-background">
      <NavbarHome />
      <div className="logo-container">
        <img className={showMenu ? "logo animation-container-open-menu" : "logo animation-container"} onClick={handleMenu} src="/images/logo_rot.png" alt="Logo"/>
        {showMenu && (
                  <Menu />
                )}
      </div>
    </div>
    </div>
    <div className='text-section-container fixed-background background-1'>
      <h1>/ABOUT</h1>
    </div>
    <div className='scroll-background scroll-bg-color-1'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</p>
    </div>
    <div className='text-section-container fixed-background background-2'>
        <h1>/GALLERY</h1>
    </div>
    <div className='scroll-background scroll-bg-color-2'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</p>
    </div>
    <div className='text-section-container fixed-background background-3'>
        <h1>/MUSIC</h1>
    </div>
    <div className='scroll-background  scroll-bg-color-3'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</p>
    </div>
    <footer className="footer">
      <a className="footer-link" href="https://www.facebook.com/ramschakl"><img className="icon" src="/images/fb.png" alt="Logo"/></a>
      <a className="footer-link" href="https://soundcloud.com/ramschakl" ><img className="icon" src="/images/sc.png" alt="Logo"/></a>
    {/* doesn't work yet */}
    <a className="footer-link" href="htttps://mail.wtf"><img className="icon" src="/images/mail.png" alt="Logo"/></a>
    </footer>
  </>
  )
}
