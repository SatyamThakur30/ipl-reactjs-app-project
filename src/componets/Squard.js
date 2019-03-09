import React, { Component } from 'react'
import squardData from './squard/squarddata'
import './squard.css'
export default class Suard extends Component {
    state={
        data:squardData
    }
  render() {
      
    return (
    <React.Fragment>
        <div className="squardlist-container">
         {
             this.state.data.map((item)=>{
                 return(
                     <section className="squard-content">
                       <section className="squard">
                       <section className="squard-title"><h1>{item.team}</h1><img src={item.logo} alt="logo" width="50" height="50"></img></section>
                     <section className="captain"><p><strong>Captain:</strong> {item.captain}</p></section>
                     <section className="squard"><p ><strong>Squard:</strong></p>{item.squard}</section>
                       </section>
                     </section>
                 )
             })
         }
        </div>
    </React.Fragment>
    )
  }
}
