export default function SearchBarEvent(props){

    const handleInputChange = event => {
		
		props.setQueryProp(event.target.value)
	}
    
    return (
        <>
            <div>Search by Name</div>
            <input className='event-filter-input' type="search" onChange={handleInputChange} placeholder="Search..."/>
        </>
    )
}