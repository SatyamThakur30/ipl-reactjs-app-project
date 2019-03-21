import React, { Component } from 'react'
import teamWins from './teamsdata'

import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:teamWins,
        
    }
   
  render() {
    return (
      
     <div className="reactfragment">
     <section>
         <h2>Teams</h2>
     </section>
         <div className="fast100overflow">
         <table>
            <tbody>
            <tr className="fast100-mainrow">
            <td ><strong>Team</strong></td>
                 <td><strong>Span</strong></td>
                 <td><strong>Played</strong></td>
                 <td><strong>Won</strong></td>
                 <td><strong>Loss</strong></td>
                 <td><strong>Winning %</strong></td>
                 <td><strong>Titles</strong></td>
             </tr>
             {
                 this.state.data.map((item)=>{
                     return(
                         <tr className="fast100content">
                         <td className="batsmenname"><img src ={item.logo} alt="logo" width="40" height="40"></img><p style={{alignSelf:"center"}}>{item.team}</p></td>
                             <td>{item.span}</td>
                             <td>{item.match}</td>
                             <td>{item.won}</td>
                             <td>{item.lost}</td>
                             <td style={{backgroundColor:" rgb(158, 154, 154)"}}><strong>{item.win}</strong></td>
                             <td><strong>{item.titles}</strong></td>
                             
                         </tr>
                         
                     )
                 })
             }
          
            </tbody>
         </table>
       
         </div>
   
     </div>
   
     
    )
  }
}
