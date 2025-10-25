import React, { Component } from 'react'

export default class ClassComponent extends Component {
  
    constructor() {
        super();
        this.state = {
            name: "Aniruddha",
            age: "21",
            hobbies: [
                "Gym",
                "Designing",
                "Programming"
            ]
        }
    }

    changeStatus = () => {
        this.setState({
            age: this.state.age * 2,
            name: "Gharat"
        })
    }
    
    render() {
    return (
      <div>
        <h1>My Name</h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        {this.state.hobbies.map((hobby) => (
            <ul>
            <li>{hobby}</li>
            </ul>
        ))}
        <button className='p-2 border border-amber-300' onClick={this.changeStatus}>Change State</button>
      </div>
    )
  }
}
