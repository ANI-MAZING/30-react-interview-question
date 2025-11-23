import { useState } from 'react'
import MapFilter from './components/MapFilter'
import Spread from './components/Spread'
import ClassComponent from './components/ClassComponent'
import ChildProps from './components/ChildProps'
import Conditional from './components/Conditional'
import EventHandling from './components/EventHandling'
import Forms from './components/Forms'
import CSSStyling from './components/CSSStyling'
import ComponentTypes from './components/ComponentTypes'
import InnerHtml from './components/InnerHtml'
import CallingAPI from './components/CallingAPI'
import Debouncing from './components/Debouncing'
import { userData } from './components/GlobalContext'
import Receiver from './components/Receiver'
import Transmitter from './components/Transmitter'
import Users from './components/Users'
import Posts from './components/Posts'
import LazyLorem from './components/LazyLorem'
import LazyLoading from './components/LazyLoading'


function App() {

  const [name, setName] = useState("");
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
       {/* <Forms/>
       <CSSStyling/> */}
       {/* <ComponentTypes/> */}
       {/* <InnerHtml/> */}
       {/* <CallingAPI/> */}

       {/* <Debouncing/> */}

        {/* <userData.Provider value={{name, setName}}>
          <Receiver />          
          <Transmitter/>          
        </userData.Provider> */}
        {/* <Posts/>
        <hr/>
        <Users/> */}
        <LazyLoading/>
    </>
  )
}

export default App
