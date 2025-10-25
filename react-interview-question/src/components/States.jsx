import React, { useState } from 'react'

//  States in react are a form of naming variables. This variables con be rendered dynamically. There staete can be changed.
// Two ways of defining states in  react. 1. Function Component 2. Class Component.

function States() {

// States in Functional Component
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)


      return (
    <>
        <div className=''>
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
            <div>{this.state.hobbies.map((hobby) => (
                <li>{hobbies.hobby}</li>
            ))}</div>
        </div>
    </>
  )
}



export default States
