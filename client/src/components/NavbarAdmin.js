import { Link } from 'react-router-dom'
import React, { useContext } from 'react'                     
import { AuthContext } from '../context/auth' 

function NavbarAdmin() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, logOutAdmin } = useContext(AuthContext);   // <== ADD
  //  Update the rendering logic to display different content 
  //  depending on the user being logged in or not
  return (
    <nav className="nav-visitor">
      <div className="nav-links-container">
        <Link className="nav-link" to="/">HOME</Link>
        {isLoggedIn && (
          <>
            |
            <Link to="/"className="nav-link"> LOGOUT</Link>
          </>
        )}
        {!isLoggedIn && (
          <>
            <Link to="/signup"> <button>Sign Up</button> </Link>
            <Link to="/login"> <button>Login</button> </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavbarAdmin;
