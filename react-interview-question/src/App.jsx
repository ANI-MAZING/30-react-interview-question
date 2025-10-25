import { useState } from 'react'
import MapFilter from './components/MapFilter'
import Spread from './components/Spread'
import ClassComponent from './components/ClassComponent'
import ChildProps from './components/ChildProps'
import Conditional from './components/Conditional'
import EventHandling from './components/EventHandling'
import Forms from './components/Forms'


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
      {/* <ChildProps 
        count={count} 
        increment={increment} 
        name={name} 
      /> */}
      {/* <Conditional/> 
       Ternary Operator */}
       {/* <EventHandling/> */}
       <Forms/>

    </>
  )
}

export default App
