import React, { Component } from 'react'
import './header.css'
export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
      <a href="#">
        <section className="tothetop">
          <span><strong>TO THE TOP</strong></span>
        </section>
        </a>
        <section className="content1">
          <a href="#home"><span>ipl11</span></a>
          <a href="#home"><span>Github</span></a>
          <a href="#home"><span>Feedback</span></a>
           
        </section>  
       <section className="dev"><p>Afforted By: Satyam Thakur</p></section>
       <section className="discrimer"><p><strong>Discrimer:This site is build as project and source code is available on GITHUB, in case of any copyright issue please contact us. We will tackle it soon.</strong></p></section>
      </div>
    )
  }
}
