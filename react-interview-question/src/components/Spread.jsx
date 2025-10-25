import React, { useState } from 'react'

function Spread() {

    // initial users list
const usersList = [
        {
        id: 1,
        firstName: "Marie",
        lastName: "Curie",
        level: "Expert"
    },
    {
        id: 2,
        firstName: "Robert",
        lastName: "Oppenheimer",
        level: "Expert"
    },
    {
        id: 3,
        firstName: "Student",
        lastName: "Studentson",
        level: "Beginner"
    }
]

// a single new user to add when the button is clicked
const newUser = {
    id: 4,
    firstName: "Aniruddha",
    lastName: "Gharat",
    level: "Beginner"
}

// keep users in state so adding updates the UI
const [users, setUsers] = useState(usersList)

function addUser() {
    setUsers(prev => {
        // prevent duplicates by id
        if (prev.some(u => u.id === newUser.id)) return prev
        return [...prev, newUser]
    })
}


  return (
    <>
        <h1>This is Spread Operator</h1>
        <div className='flex flex-col gap-2'>
        {users.map((user) => (
            <div key={user.id} className='border border-black'>
                <h1>{user.firstName}</h1>
                <h1>{user.id}</h1>
            </div>
        ))}
        </div>
        <button onClick={addUser}>Add new Account</button>
    </>
  )
}

export default Spread
