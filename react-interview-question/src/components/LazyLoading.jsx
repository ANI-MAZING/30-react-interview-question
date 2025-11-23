import React, {Suspense} from 'react'
// import LazyHome from './LazyHome'
// import LazyLorem from './LazyLorem'

const Lorem = React.lazy(() => import("./LazyLorem"))
const Home = React.lazy(() => import("./LazyHome"))

function LazyLoading() {
  return (
    <div>
        <Suspense fallback = {<h1>Loading Please Wait</h1>}>
      <Home/>
      <Lorem/>
      </Suspense>
    </div>
  )
}

export default LazyLoading


// Time Before Lazy Loading
// LazyHome size=3.7kbs time=5ms 
// LazyLorem size=5.4kbs time=28ms 


// Time After Lazy Loading
// LazyHome size=3.7kbs time=3ms 
// LazyLorem size=5.4kbs time=21ms 