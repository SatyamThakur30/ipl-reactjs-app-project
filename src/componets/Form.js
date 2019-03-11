import React, { Component } from 'react'
import './form.css'
export default class Form extends Component {
  render() {
    return (
    
      <div>
     
      <form name="contact" method="POST" data-netlify="true">
      <i className="fa-fa-paper-plane"></i>
      <input type="text" name="name" placeholder="Full Name"></input><br/>
    <input type="email"name="email" placeholder="E-Mail"></input><br/>
    <textarea  name="comment" id="textarea" cols="40" rows="5">We'd love your feedback !!</textarea><br/>
    <button type="submit" name="submit"><i className="fa-fa-paper-plane"></i> SEND MESSAGE</button>

      </form>
      </div>
    )
  }
}
