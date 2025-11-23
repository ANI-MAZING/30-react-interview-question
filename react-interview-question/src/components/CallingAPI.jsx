// Rest API
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CallingAPI() {

  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);


  // Post Method
  const PostUser = () => {
    axios.post("https://6921f967512fb4140be1ea44.mockapi.io/users", {
        name: name,
        age: 21,
        hobbies: [ "Gym", "Cooking", "Riding", "Gaming", "Building", "Designing" ]
    })
    .then((res) => {
      console.log(res.data.name)
    })
    .catch((err) => {
      console.log(err)
    })
}



  // PUT Method
  const updateUser = (id) => {
    console.log(id)
    axios.put(`https://6921f967512fb4140be1ea44.mockapi.io/users/${id}`, {
      name: name,
      age:22,
      hobbies: [ "Gym", "Cooking", "Riding", "Gaming", "Building", "Designing" ]
    })
    .then((res) => {
      console.log(res.data.name)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const getData = () => {
        axios.get("https://6921f967512fb4140be1ea44.mockapi.io/users")
    .then((res) => {setUsers(res.data)})
    .catch((err) => {console.log(err)})
  }


  // Delete Method 
  const deleteUser = (id) => {
    axios.delete(`https://6921f967512fb4140be1ea44.mockapi.io/users/${id}`)
        .then((res) => {getData()})
    .catch((err) => {console.log(err)})
  }

    // Get method
  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
       <h1>This is function for REST API</h1> 
       <form action="">
        <input 
        type="text" 
        placeholder='Enter your Name' 
        onChange={(event) => setName(event.target.value)}/>

       <button onClick={PostUser}>Post Data</button>
       </form>
       {users.map((user) => {
        return (
          <>
          <div className='flex border w-full'>
            <h2 className='border border-amber-500'>{`${user.id}. ${user.name}`}</h2>
            <button onClick={() => {deleteUser(user.id)}}>Delete user</button>
            <button onClick={() => {updateUser(user.id)}}>Update</button>
            </div>
          </>
          )}
        )}
    </div> 
  )
}

export default CallingAPI
