import React, { useState, useEffect } from 'react'

const ListEvents = () => {
    const [eventsList, setEventsList] = useState([])
    useEffect(() => {
        fetch("https://wildhab-api-a.web.app/events")
            .then(result => result.json())
            .then(data => setEventsList(data.data))
            .catch(error => console.log('error', error))
    }, [])
    // store events in state √
    // display events √
    return(
        <>
            <div>Hello List Events</div>
            {eventsList && eventsList.map(event =>
                <p key={event.id}>{event.eventName || event.name}, {event.sport}, Duration: {event.eventDuration}</p>
            )}
        </>
    )
}

export default ListEvents