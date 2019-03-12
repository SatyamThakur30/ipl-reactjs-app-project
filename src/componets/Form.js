import React, { Component } from 'react'
import './form.css'
export default class Form extends Component {
  render() {
    return (
    
      <div className="form-container">
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label> <input type="text" name="name" placeholder="Name"/></label>   
  </p>
  <p>
    <label> <input type="email" name="email" placeholder="E-mail"/></label>
  </p>
   <p>
    <label><textarea name="message" placeholder="Message"></textarea></label>
  </p>
  <p>
    <button type="submit"><i className="fa fa-paper-plane"></i><strong>&nbsp;Send Message</strong></button>
  </p>
</form>
      </div>
    )
  }
}
