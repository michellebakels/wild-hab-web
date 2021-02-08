import React, {useEffect} from 'react'

const ListEvents = () => {

    useEffect(() => {
        fetch("https://wildhab-api-a.web.app/events")
            .then(result => result.json())
            .then(data => console.log(data))
            .catch(error => console.log('error', error))
    }, [])

    // store events in state
    // display events

    return(
        <div>Hello List Events</div>
    )
}

export default ListEvents