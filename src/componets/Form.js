import React, { Component } from 'react'
import './form.css'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="form-container">

         <form onSubmit={this.handleSubmit} data-netlify-recaptcha="true" >
      <input type="hidden" name="form-name" value="contact" />
         
            <label>
             <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" autoFocus required/>
            </label><br/>
         
            <label>
              <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="E-mail" required/>
            </label><br/>
          
            <label>
             <textarea name="message" value={message} onChange={this.handleChange} placeholder="Message" required />
            </label><br/>
            <div className="recaptcha" data-netlify-recaptcha="true"></div>
            <button type="submit"><i className="fa fa-paper-plane"></i><strong>&nbsp;Send Message</strong></button>
          
        </form>

 

      </div>
    )
  }
}
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}
