import React, { Component } from 'react'
import './header.css'
export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
      <a href="#">
        <section className="tothetop">
          <span><strong>TO THE TOP &nbsp;</strong><i style={{fontSize:"1.8rem"}} className="fa fa-arrow-circle-up"></i></span>
        </section>
        </a>
       <section className="header-content">
       <section className="content1">
          <a href="https://vivoipl2019schedule.co.in/" target="blank"><i class="fas fa-external-link-alt"></i><span>&nbsp;IPL Officials</span></a>
          <a href="https://github.com/SatyamThakur30/" target="blank"><i class="fab fa-github"></i><span>&nbsp;Github</span></a>
          <a href="#home"><i class="fas fa-comments"></i><span>&nbsp;&nbsp;&nbsp;Feedback</span></a>
           
        </section>  
       <section className="dev"><p>Afforted By: Satyam Thakur</p></section>
      </section>
      <section className="discrimer"><p><strong>Disclaimer:In case of any copyright issue please contact us. We will tackle it soon.</strong></p></section>
      
      </div>
    )
  }
}
