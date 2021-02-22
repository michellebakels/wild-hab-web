import React, { useState, useEffect } from 'react'
import {Col, Input, List, Row} from "antd";
import { HeartOutlined, DeleteOutlined } from '@ant-design/icons';

const addToFavorites = (event, favoriteEvents, setFavoriteEvents) => {
    const favoriteEventExists = favoriteEvents.some(favoriteEvent => event.id === favoriteEvent.id)
    return favoriteEventExists ? undefined : setFavoriteEvents((favorites) => favorites.concat(event))
}

const removeFromFavorites = (favEvent, favoriteEvents, setFavoriteEvents) => {
    const eventIndex = favoriteEvents.findIndex(event => event.id === favEvent.id)
    const updatedFavoriteEvents = [...favoriteEvents]
    updatedFavoriteEvents.splice(eventIndex, 1)
    setFavoriteEvents(updatedFavoriteEvents)
}

const ListEvents = () => {
    const [eventsList, setEventsList] = useState([])
    const [durationFilterValue, setDurationFilterValue] = useState(undefined)
    const [favoriteEvents, setFavoriteEvents] = useState([])

    useEffect(() => {
        fetch("https://wildhab-api-a.web.app/events")
            .then(result => result.json())
            .then(data => setEventsList(data.data))
            .catch(error => console.log('error', error))
    }, [])

    useEffect(() => {
        if (durationFilterValue !== undefined) {
            const filteredEvents = eventsList.filter(event => parseInt(event.eventDuration) <= durationFilterValue)
            setEventsList(filteredEvents)
        }
    }, [durationFilterValue])

    const header = () => {
        return(
            <div>
                <h2>All WildHab Events</h2>
                <label>Filter by Duration:</label>
                <Input
                    value={durationFilterValue}
                    onChange={(e) => {setDurationFilterValue(e.target.value)}}
                />
            </div>
        )
    }

    return(
        <>
            <Row justify="space-around">
                <Col>
                    <List
                        header={header()}
                        dataSource={eventsList}
                        renderItem={event =>
                            <List.Item
                                key={event.id}
                                actions={[<a key="add-to-favorites" onClick={() => addToFavorites(event, favoriteEvents, setFavoriteEvents)}><HeartOutlined /></a>]}
                            >
                                {event.eventName || event.name}, {event.sport}, Duration: {event.eventDuration}
                            </List.Item>
                        }
                    />
                </Col>
                <Col>
                    <List
                        header={<div>Favorite WildHab Events</div>}
                        dataSource={favoriteEvents}
                        renderItem={favEvent =>
                            <List.Item
                                key={favEvent.id}
                                actions={[<a key="remove-from-favorites" onClick={() => removeFromFavorites(favEvent, favoriteEvents, setFavoriteEvents)}><DeleteOutlined /></a>]}
                            >
                                {favEvent.eventName || favEvent.name}, {favEvent.sport}, Duration: {favEvent.eventDuration}
                            </List.Item>
                        }
                    />
                </Col>
            </Row>
        </>
    )
}

export default ListEvents