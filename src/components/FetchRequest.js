import React, { useState, useEffect } from 'react'

const XHRequest = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [users, setUsers] = useState([])
    useEffect(() => {
        // fetch(url).then(response => response.json()).then(result => setUsers(result))
        const fetchData = async () => {
            const resjson = await fetch(url).then(response => response.json())
            setUsers(resjson)
        }
        fetchData()

    }, [])

    if (users === null) {
        return <div>
            <h1>Data is on the way</h1>
        </div>
    } else {
        return (
            <div>
                <h1>Request Data with XMLHttpRequest</h1>
                {users.map(user => {
                    return (
                        <div key={user.id}>
                            <h1>{user.name}</h1>
                            <p>{user.username}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default XHRequest
