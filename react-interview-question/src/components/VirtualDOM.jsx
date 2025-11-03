import React from 'react'

function VirtualDOM() {
  return (
    <div>
      <h1>Virtual DOM is a concept where the entire frontend (UI) is kept in the memory and synced with the real DOM</h1>
      <p>Let's suppose you have to change some states in your frontend. So whenever the states changes the DOM rerenders. So Virtaul DOM helps in this situation with rather than changing the entire UI it just changes the updated content. It creates a new node of the updates and append it to the Real DOM</p>
      <h2>This process is called Reconciliation.</h2>
    </div>
  )
}

export default VirtualDOM
