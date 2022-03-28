import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export default function ( { children } ) {
  
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading ...</p>;
  if (!isLoggedIn) {
    return <Navigate to="/behind-the-scences/login" />;
  } else {
  // If the admin is logged in, allow to see the page 
    return children;
  }
}

