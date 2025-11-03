import React, { useRef } from 'react'

export default function ComponentTypes() {

    //Uncontrolled Components

    let name = useRef();
    let age = useRef();

    const getName = (event) => {
        console.log(event.target.value)
    }
    const getAge = (event) => {
        console.log(event.target.value)
    }

    const submit = () => {
        console.log(name.current.value)
        console.log(age.current.value)
    }
 
  return (
    <>

    {/* Uncontrolled Components */}
    <div>
      <input type="text" ref={name}  placeholder='name' />
      <input type="number" ref={age}  placeholder='age'/>
      <button onClick={submit}>Submit</button>
    </div>

    {/* Controlled COmponents */}
          {/* <input type="text" onChange={getName} placeholder='name' />
      <input type="text" onChange={getAge} placeholder='age'/>
      <button onClick={submit}>Submit</button> */}
    </>
  )
}
