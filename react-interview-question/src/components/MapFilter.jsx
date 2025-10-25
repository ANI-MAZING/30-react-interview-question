import React, { useEffect, useState } from 'react'


function MapFilter() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => setUsers(json))
  }, [])


  const mapData = () => {
    let filteredData = users.filter((user) => user.id >= 5);
    setUsers(filteredData)
  }


 

  return (
    <>   
     <div className='flex flex-col gap-2'>
      {users.map((user)=> (
        <div  className='border border-black flex flex-col gap-2'>
          <h1>Name: {user.name}</h1>
          <h1>UserName: {user.username}</h1>
        </div>
      ))}
    </div>
      <button onClick={mapData}>Filter</button>
      </>
  )
}

export default MapFilter;
