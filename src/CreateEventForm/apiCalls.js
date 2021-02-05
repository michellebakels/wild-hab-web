export const submitForm = (event, formValues, setResponseMessage) => {
    console.log(formValues)
    fetch("https://wildhab-api-a.web.app/events", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
    })
        .then(result => result.json())
        .then(data => {
            data.statusCode < 300 ? setResponseMessage(data.message) : console.log('error')
        })
        .catch(error => console.log('error', error))
    event.preventDefault()
}

// {"status":"success",
//     "data":{"updated":{"_seconds":1612553911,"_nanoseconds":864000000},
//     "created":{"_seconds":1612553911,"_nanoseconds":864000000},
//     "eventName":"Frisbee Event",
//         "eventDuration":"1",
//         "sport":"Frisbee",
//         "id":"Nva5RJDqLM1wz3Rvfc4o"},
//     "message":"Events loaded successfully",
//     "statusCode":200}