import axios from 'axios';
import React, { useEffect, useState } from 'react'

const pinAPI = "https://api.postalpincode.in/pincode/";

function Debouncing() {

    const [pin, setPin] = useState("")


    useEffect(() => {
        const searchPin = setTimeout(() => {
            axios.get(pinAPI + pin)
            .then((res) => {console.log(res.data[0].PostOffice)})
            .catch((err) => {console.log(err)})
            }, 2000)
            
        return () => {
            clearTimeout(searchPin);
        }
        }, [pin])

    return (
    <div>
      <input type="text" placeholder='enter pincode to search' onChange={(event) => {setPin(event.target.value)}} />
    </div>
  )
}

export default Debouncing
