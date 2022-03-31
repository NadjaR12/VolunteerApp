import React from 'react'
import ProjectList from '../components/ProjectList'
import EventList from '../components/EventList'
import NavbarAdmin from '../components/NavbarAdmin'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {

  return (
    <>
        <NavbarAdmin />
        <div className='dashboard-container'>
            <div className='heading-admin-container'>Welcome to your Dashboard!</div>
            <div>
                <div className='dashboard-list-container'> 
                    <div className='full-vol-link-container border-radius'>
                        <Link className='nav-link' to={'/behind-the-scences/volunteers/fullList'}>Full Volunteer Database</Link>               
                    </div>   
                    <ProjectList />
                    <EventList />
                </div>
            </div>
        </div>
    </>
  )
}
