import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PopupCreateEvent from './PopupCreateEvent'
import PopupEditEvent from './PopUpEditEvent'




export default function EventList() {
    
    const [events, setEvents] = useState([])
    const [showCreateEvent, setShowCreateEvent] = useState(false)
    const [eventToEdit, setEventToEdit] = useState(null)
    
    const storedToken = localStorage.getItem('authToken')
    
    //popup handle
    const handlePopupEdit = event => {
      setEventToEdit(event)
    }
    
    //get events from backend
    const getAllEvents =() => {

      axios.get(`/api/event/`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then(response => {
        console.log('response.data',response.data)
        setEvents(response.data)
      })
      .catch(err => {console.log(err) })
    }
    
   useEffect(() => {
     getAllEvents()          
    }, [])
    
    
    return(
        <>
        <div>
          <div className='dash-title-box'>
            Events
            <div>
              <button className='create-btn' onClick={()=> setShowCreateEvent(!showCreateEvent)}>+</button>
                {showCreateEvent && (
                  <PopupCreateEvent refreshEvents={getAllEvents} handleClose={() => setShowCreateEvent(false)}/>
                )}
            </div>
          </div>
          <div>
              <button className='drop-down-btn'><img className="img-arrow" src="/images/drop-down-arrow.png" alt="pfeil"></img></button>
          </div>
        </div>
          <div>
            {events.map(event=>
              <div className='dash-list-item' key={event._id}>
                <div className='dash-list-title'>{event.eventName}</div>
                <div className='dash-btn-container'>
                <button  className='dash-btn' onClick={()=> {handlePopupEdit(event)}}>Edit</button>
                  {eventToEdit && <PopupEditEvent
                  handleClose={() => {setEventToEdit(null)}} thisevent={eventToEdit} refreshEvents={getAllEvents}/>
                  }
                <button  className='dash-btn' onClick={()=>{
                    axios.delete(`/api/event/${event._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                      .then(deletedProject => {
                        console.log('deletedEvent', deletedProject)
                        // get all projects to show immediately list of projects without deleted item
                        getAllEvents();
                        })
                      .catch(err => console.log(err))
                  }}>Delete</button>
                 </div>
            </div>
            )}
          </div>
        </>
    )  
}