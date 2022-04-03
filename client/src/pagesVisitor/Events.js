import React,  { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavbarVisitor from '../components/NavbarVisitor'
import DateFilterEvent from '../components/DateFilterEvent'
import SearchBarEvent from '../components/SearchBarEvent'
import ToggleEvent from '../components/ToggleEvent'
import TypeFilterEvent from '../components/TypeFilterEvent'


export default function Events() {

    const [events, setEvents] = useState([])
    const [query, setQuery] = useState('')
    const [eventDate ,setEventDate] = useState('')
    const [toggle, setToggle] = useState(false)
    const [type, setType] = useState('')

    const storedToken = localStorage.getItem('authToken')

    const getAllEvents = () => {
        axios.get('/api/events/', { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(response => {
            console.log('response.data', response.data)
            setEvents(response.data)
        })
        .catch(err => {
           console.log(err) 
        })
   }
   useEffect(()=> {getAllEvents()}, [])

   const handleClean = () => {
       setEventDate('')
   }

    let filteredEvents;

    if(events) {
        filteredEvents = events.filter(event => {
            return event.eventName.toLowerCase().includes(query)
    })}
    if(events && eventDate) {
        filteredEvents = filteredEvents.filter(event => {
            return event.eventDate === eventDate
         })
    }
    if(toggle) {
        filteredEvents = filteredEvents.filter(event => {
            return event.eventOutdoor === true
        })
    }
    if(type !== '') {
        filteredEvents = filteredEvents.filter( event => {
            return event.eventType.toLowerCase() === type.toLowerCase()
       })
    }
   
    return(
    <>
    {events === [] ? <div>Loading ...</div> :
        <>
            <NavbarVisitor />
            <div className="heading-project-container">
                <h1>UPCOMING EVENTS</h1>
            </div>
            <div className="event-page-container bg-overlay-event">
                {/* Filter Box */}
                <div className="filter-box">
                        <SearchBarEvent setQueryProp={setQuery}/>
                        <TypeFilterEvent type={type} setTypeProp={setType}/>
                        <DateFilterEvent eventDate={eventDate} setEventDateProp={setEventDate}/>
                        <button className="glow-on-events" onClick={handleClean}>Reset Date</button> 
                        <ToggleEvent setCheckProp={setToggle}/>
                </div>
                {/* Event List */}
                <div className="event-container">
                {filteredEvents.map(event => {
                    return(
                        <div key={event._id} className="single-project-container">
                            <h1 className="event-title">{event.eventName}</h1>
                            <p>#{event.eventType}</p>
                            <h4><img className="map-icon" src="/images/placeholder.png" alt=""/>{event.eventLocation}</h4>
                            <div>{event.eventDate}</div>
                            <p>{event.eventTime}</p>
                            <hr className="hr"></hr>  
                            <Link className="event-link" to={`/events/${event._id}`}>Details</Link>
                            <hr className="hr"></hr>
                        </div>
                    )
                })
                } 
                </div>
            </div>
        </>
    }
    </>
    )
}