import React from 'react'

export default function Conditional() {

  // a traditional if else statement

  const age = 21;
  const name = "Aniruddha"

  if (name === "Anurag") {
    console.log("Your Name is not Aniruddha")
  }
  else if (name === "Aniruddha" && age === 21) {
    console.log("Your name is Aniruddha ")
    console.log("Your age is 21")
  }
  else {
    console.log("I dont know your name.")
  }

  return (
    <> 
      <h1>This is Conditional Inline Statement or Ternary Operator</h1>

      {/* This is a ternary operator */}
       {
        name === "Anurag" ? (
          <h1>Your Name is not Aniruddha</h1>
        ): 
        name === "Aniruddha" && age === 21 ? (
          <div>
            <h1>Your name is Aniruddha</h1>
            <h1>Your age is 21</h1>
            </div>
          ) : (
            <h1>I don't know your name</h1>
          )
       }

    </>
  )
}
