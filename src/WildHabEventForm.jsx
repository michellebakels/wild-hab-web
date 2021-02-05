import React, {useState} from 'react'

const WildHabEventForm = () => {
    const [formValues, setFormValues] = useState({
        eventName: '',
        sport: '',
        eventDuration: 0
    })

    const submitForm = (event) => {
        console.log(formValues)
        fetch("https://wildhab-api-a.web.app/events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then(result => result.json())
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.log('error', error))
        event.preventDefault()
    }

    return(
        <>
            <h1>Create Wild Habitat Event</h1>
            <form onSubmit={(event) => submitForm(event)}>
                <label>
                    Event Name:&nbsp;
                </label>
                <input
                    name="eventName"
                    type="text"
                    value={formValues.eventName}
                    onChange={e => setFormValues({...formValues, eventName: e.target.value})}
                />
                <br />
                <label>
                    Sport:&nbsp;
                </label>
                <input
                    name="sport"
                    type="text"
                    value={formValues.sport}
                    onChange={e => setFormValues({...formValues, sport: e.target.value})}
                />
                <br />
                <label>
                    Event Duration (hours):&nbsp;
                </label>
                <input
                    name="eventDuration"
                    type="number"
                    value={formValues.eventDuration}
                    onChange={e => setFormValues({...formValues, eventDuration: e.target.value})}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )

}

export default WildHabEventForm

