import React, { useState, useEffect } from 'react'
import {Col, List, Row} from "antd";

const addToFavorites = (eventId, setFavoriteEvents) => {
    setFavoriteEvents((favorites) => favorites.concat(eventId))
}

const ListEvents = () => {
    const [eventsList, setEventsList] = useState([])
    const [favoriteEvents, setFavoriteEvents] = useState([])

    useEffect(() => {
        fetch("https://wildhab-api-a.web.app/events")
            .then(result => result.json())
            .then(data => setEventsList(data.data))
            .catch(error => console.log('error', error))
    }, [])

    console.log({favoriteEvents})

    return(
        <>
            <Row justify="space-around">
                <Col xs={24} sm={12}>
                    <h1 style={{textAlign: "center"}}>Hello List Events</h1>
                </Col>
            </Row>
            <Row justify="space-around">
                <Col>
                    <List
                        dataSource={eventsList}
                        renderItem={event =>
                            <List.Item
                                key={event.id}
                                actions={[<a key="add-to-favorites" onClick={() => addToFavorites(event.id, setFavoriteEvents)}>add to favorites</a>]}
                            >
                                {event.eventName || event.name}, {event.sport}, Duration: {event.eventDuration}
                            </List.Item>
                        }
                    />
                </Col>
            </Row>
        </>
    )
}

export default ListEvents