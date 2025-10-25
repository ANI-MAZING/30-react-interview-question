import React, { useState } from 'react'

export default function Forms() {

    const [objData, setObjData] = useState({})

    const getInputs = (value, name) => {
        let data ={ [name] : value}

        setObjData({...objData, ...data})
    }

    const submit = (event) => {
        event.preventDefault();
        console.log(objData)
    }

  return (
    <>
        <form className='flex flex-col gap-2 items-center' onSubmit={submit}>

            <input name='name' className='border border-amber-400' type="text" placeholder='Name' onChange={(event) => getInputs(event.target.value, event.target.name)} />
            <input name='age' className='border border-amber-400' type="text" placeholder='Age'  onChange={(event) => getInputs(event.target.value, event.target.name)}/>
            <input name='hobbies' className='border border-amber-400' type="text" placeholder='Hobbies' onChange={(event) => getInputs(event.target.value, event.target.name)} />
            <input name='birthdate' className='border border-amber-400' type="date" placeholder='birthdate' onChange={(event) => getInputs(event.target.value, event.target.name)} />
            <button className='border border-amber-400' type='submit'>Submit</button>
            <button className='border border-amber-400' type='reset'>Reset</button>
        </form>
    </>
  )
}
