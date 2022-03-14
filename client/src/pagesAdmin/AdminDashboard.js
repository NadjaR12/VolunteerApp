import React from 'react'
import ProjectList from '../components/ProjectList'
import EventList from '../components/EventList'
import Navbar from '../components/NavBar'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {

  return (
    <>
        <div className='dashboard-container'>
            <div>
                <Navbar />
            </div>
            <div className='heading-admin-container'></div>
            <div>
                <div className='volunteer-link-container'>    
                    <Link className='nav-link' to={'/behind-the-scences/volunteers/fullList'}>Full Volunteer Database</Link>               
                </div>
                <div>
                    <div>    
                        <ProjectList />
                    </div>
                    <div>
                        <EventList />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
