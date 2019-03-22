import React, { Component } from 'react'
import './header.css'
import Form from './Form'
export default class Header extends Component {
  state={
    feedback:false
  }
   openFeedback =()=>{
     this.setState({
       feedback:!this.state.feedback
     })
   }
   
  render() {
    return (
      <div className="header-container">
      <a href="#">
        <section className="tothetop">
          <span><strong>TO THE TOP &nbsp;</strong><i style={{fontSize:"1.8rem"}} className="fa fa-arrow-circle-up"></i></span>
        </section>
        </a>
       <section className="header-content">
       <section className="logo-container">
        <img src="./iplstats.png" alt="logo"></img>
       </section>
      {this.state.feedback && <div className="form-container"><Form></Form></div>}

       <section className="content1">
          <a href="https://vivoipl2019schedule.co.in/" target="blank"><i class="fas fa-external-link-alt"></i><span>&nbsp;IPL Officials</span></a>
          <a href="https://github.com/SatyamThakur30/" target="blank"><i class="fab fa-github"></i><span>&nbsp;Github</span></a>
          <a href="#home"><i class="fas fa-comments"></i><span onClick={this.openFeedback}>&nbsp;&nbsp;&nbsp;Feedback</span></a>
           {console.log(this.state.feedback)}
        </section>  
       <section className="dev"><p>Developed and maintain by: InnoEve</p></section>
      </section>
      <section className="discrimer"><p><strong>Disclaimer:In case of any copyright issue please contact us. We will tackle it soon.Write us(innoeve4@gmail.com)</strong></p></section>
      
      </div>
    )
  }
}
