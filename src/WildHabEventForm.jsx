import React from 'react'

class WildHabEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            sport: '',
            eventDuration: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    submitForm(event) {
        console.log(this.state)
        fetch("https://wildhab-api-a.web.app/events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then(result => result.json())
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.log('error', error))
        event.preventDefault()
    }

    render() {
        return(
            <>
                <h1>Create Wild Habitat Event</h1>
                <form onSubmit={this.submitForm}>
                    <label>
                        Event Name:&nbsp;
                    </label>
                    <input
                        name="eventName"
                        type="text"
                        value={this.state.eventName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>
                        Sport:&nbsp;
                    </label>
                    <input
                        name="sport"
                        type="text"
                        value={this.state.sport}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>
                        Event Duration (hours):&nbsp;
                    </label>
                    <input
                        name="eventDuration"
                        type="number"
                        value={this.state.eventDuration}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default WildHabEventForm

