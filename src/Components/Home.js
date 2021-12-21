
import React, { Component } from 'react'


function handleReadMore()
{
    alert('You clicked Readmore');
}

// Component named Home is Created and exported 
export default class Home extends Component {

  courseTraining = "React & Redux";

  render() {
    const name = "Anil"
    var lastName = "Shrestha"
    return (
      <div className = "componentClass">
          <div className="content">
              {/* use of localVariable */}
              <h1>Hi This is {name} {lastName}</h1>
              {/* use of Global Variable  */}
              <h2>I am enrolled in {this.courseTraining}</h2> 

              <button className = "btn" onClick = {handleReadMore}>Read More</button>
        </div>
      </div>
    )
  }
}

const test = new Home();
console.log(test);