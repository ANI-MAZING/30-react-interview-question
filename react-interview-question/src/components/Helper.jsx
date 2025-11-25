import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../helpers/GetAllUsers'
import { addNums, multiplyNums } from '../helpers/operators';

function Helper() {

    const [numOne, setNumOne] = useState("0")
    const [numTwo, setNumTwo] = useState("0")

    const getUsersByHelper = async() => {
        let usersData = await getAllUsers(`todos`);
        console.log(usersData)
    }

    const operatorNums = () => {
        let sum = addNums(numOne, numTwo)
        let multiply = multiplyNums(numOne, numTwo)
        console.log(sum)
        console.log(multiply)
    }


    useEffect(() => {
        getUsersByHelper()
    }, [])


  return (
    <div>
      <h1>Helper Function</h1>
      <input type="number" name="enter num 1" id="" onChange={(event) => {setNumOne(event.target.value)}} />
      <input type="number" name="enter num 2" id="" onChange={(event) => {setNumTwo(event.target.value)}}/>
      <button onClick={operatorNums()}>Operate on given nums</button>
    </div>
  )
}

export default Helper
