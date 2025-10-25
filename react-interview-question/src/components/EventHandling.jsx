import React, { useState } from 'react'

export default function EventHandling() {
    
    const [add, setAdd] = useState()

    const getInput = (event) => {
        console.log(event.target.value)
    }

    const addNums = (num1, num2) => {
        setAdd(num1 + num2)
    }

  return (
    <div>
          <div>
            <input type="text" onChange={getInput} placeholder='Add something' name='input' />
            <button onClick={() => addNums(5,3)}>Add Numbers</button>
            <h1>{add}</h1>
          </div>
    </div>
  )
}
