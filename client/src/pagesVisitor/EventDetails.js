import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NavbarVisitor from '../components/NavbarVisitor'

export default function EventDetails() {

	const [event, setEvent] = useState(null);
	
	const { id } = useParams()

	useEffect(() => {
		axios.get(`/api/events/${id}`)
			.then(response => {
				setEvent(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
		{event === null ? <div>Loading ...</div> :
		<>
			<NavbarVisitor />
			<div className="project-page-container bg-overlay-event"> 
			<div className="project-container">
				<div className="event-detail-container">
					<div>{event.eventPicture}</div>
					<h1 className="event-title">{event.eventName}</h1>
					<p>#{event.eventType}</p>
					<h4><img className="map-icon" src="/images/placeholder.png" alt=""/>{event.eventLocation}</h4>
					<p>{event.eventDate}</p>
					<p>{event.eventTime}</p>
					<h4>What the event is about:</h4> 
					<p>{event.eventDescription}</p>
				</div>
			</div>
			</div>
			</>
			}
    	</>
	)
}