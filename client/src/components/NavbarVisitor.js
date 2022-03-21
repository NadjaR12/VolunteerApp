import { Link } from "react-router-dom";

export default function NavbarVisitor (){

    return(
        <nav className="nav-visitor">
        {/* <div>
            <Link to='/'><img className="logo-nav" src="/images/logo_gelb.png" alt="Logo"/></Link>
        </div> */}
        <div className="nav-links-container">
            <Link className="nav-link" to='/Projects'>PROJECTS</Link> 
            |
            <Link className="nav-link" to='/Events'>EVENTS</Link>
            |
            <Link className="nav-link" to='/'>HOME</Link>
        </div>
        </nav>
    )
}