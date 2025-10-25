import React from 'react'

export default function ChildProps({name, count, increment}) {
  return (
    <div>
      <h1>This is Props in React</h1>
      <p>Rendering Name from Parent Component: {name}</p>
        <p>Current Count: {count}</p>
      {/* <button onClick={increment}>Increase Count</button> */}
      <button onClick={() => increment(count + 1)}>Increase Count from Child</button>
    </div>
  )
}
