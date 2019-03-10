import React, { Component } from 'react'
import capHolder from './capholderdata'
import './capholder.css'
export default class CapHolder extends Component {
  state={
    capholder:capHolder
  }
  render() {
   
    return (
     
      
      <div className="main-capholder-container">
      <section >
 
       {
         this.state.capholder.map((item)=>{
           return(
             <div className="cap-container">
             <section className="cap-title">
             <img src={item.capimage} alt="cap" width="50" height="50"></img>
             <section>
               {item.title}
             </section>
            </section>
           <section className="cap-content">
            
               <img src={item.image} alt="pic" width="80" height="90"></img>
               <section>
               <p>{item.name}</p>
               <p>{item.team}</p>
               <p>{item.run}</p>
                <p>{item.wicket}</p>
              <p>{item.matches}</p>
               </section>
             
           </section>
             </div>
           )
         })
       }
       </section>
     
     
      </div>
    )
  }
}
