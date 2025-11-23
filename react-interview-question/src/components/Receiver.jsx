import React from 'react'
import { useContext } from 'react'
import { userData } from './GlobalContext'

function Receiver() {

    let {setName} = useContext(userData)
    
  return (
    
    <div>
      <button onClick={() => setName("Aniruddha")}>Change Name</button>
    </div>
  )
}

export default Receiver
