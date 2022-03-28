export default function DateFilterEvent(props){

    return(
    <>
		<div>Choose a date</div>
		<input className="event-filter-input"
			name="eventDate"
			type="date"
			value={props.eventDate}
			onChange={e => props.setEventDateProp(e.target.value)}
		/>
    </>
    )
}