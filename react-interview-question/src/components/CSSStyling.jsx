import React from 'react'
import '../index.css';

const styles = {
    internal: {
        color: "red"
    }
}

export default function CSSStyling() {
  return (
    <div>
      <h1 className='external'>This is External Styling </h1>
      <h1 style={styles.internal}>This is Internal Styling</h1>
      <h1 style={{color: "yellow"}}>This is Inline styling</h1>
    </div>
  )
}
