
import React, { Component } from 'react'
import TopNav from './TopNav';
import Nav from './Nav';
import Slider from './Slider';
import Form from './Form';


// Component named Home is Created and exported 
export default class Home extends Component {

  courseTraining = "React & Redux";

  render() {
   
    return (
      <>
        <div className="container-fluid pb-2 pt-2 bg-dark text-white">
          <TopNav />
        </div>

        <div className="container">
        <Nav/>
        <Slider title = "Hi, Looking for Job?" title2 = "Apply Now"/>

        <Form />
        </div>
      </>
    )
  }
}

