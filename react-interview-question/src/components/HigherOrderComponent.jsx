import React from "react";
import { useState, useEffect } from "react";


export default function HigherOrder(title, Component, api) {
    
    const userAPI = `https://jsonplaceholder.typicode.com/${api}`
    return function HOC() {
    const [data, setData] = useState([])
    const getData = async() => {
        const data = await fetch(userAPI)
        .then((res) => {return res})
        .catch((err) => {return err})

        setData(await data.json())
    }

    useEffect(() => {
        getData()
    }, [])

    return <div>
            <h1>{title}</h1>
            <Component data={data}/>
        </div>
    }
}

