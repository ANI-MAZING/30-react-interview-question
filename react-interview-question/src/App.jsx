import { useState } from 'react'
import MapFilter from './components/MapFilter'
import Spread from './components/Spread'
import ClassComponent from './components/ClassComponent'
import ChildProps from './components/ChildProps'


function App() {
  const [name, setName] = useState("Aniruddha");
  const [count, setCount] = useState(0)
  const increment = (value) => {
    setCount(value)
  }



  return (

    <>
      {/* <MapFilter/> */}
      {/* <ClassComponent/> */}
      {/* <Spread/> */}
      <ChildProps 
        count={count} 
        increment={increment} 
        name={name} 
      />
    </>
  )
}

export default App
