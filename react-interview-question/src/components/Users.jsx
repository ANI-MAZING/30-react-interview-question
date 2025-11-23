import React, { useEffect, useState } from 'react'
import HigherOrder from './HigherOrderComponent'

function Users({data}) {

  return (
    <div>
        <h2>Hello From Users</h2>
      {data.map((user) => {
        return <h2>{user.name}</h2>
      })}
    </div>
  )
}

const UsersComp = HigherOrder("Users", Users, "users")

export default UsersComp
