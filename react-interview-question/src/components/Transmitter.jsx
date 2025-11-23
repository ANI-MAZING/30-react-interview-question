import React from 'react'
import { useContext } from 'react'
import { userData } from './GlobalContext'

function Transmitter() {

    const {name} = useContext(userData)

    return (
    <div>
      This is my Name: {name}
    </div>
  )
}

export default Transmitter
