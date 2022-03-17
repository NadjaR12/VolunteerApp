import { Link } from "react-router-dom";

export default function NavbarHome (){

    return(
        <nav>
        <div className="nav-links-container">
            <Link className="nav-link" to='/Projects'>PROJECTS</Link> 
            |
            <Link className="nav-link" to='/Events'>EVENTS</Link>
        </div>
        </nav>
    )
}