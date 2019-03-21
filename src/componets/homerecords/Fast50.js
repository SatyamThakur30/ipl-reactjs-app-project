import React, { Component } from 'react'
import data from '../records/fastest50'
import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:data
    }
  render() {
    return (
     <div className="reactfragment">
     <section>
         <h2>Fastest Half Century</h2>
     </section>
         <div className="fast100overflow">
         <table>
            <tbody>
            <tr className="fast100-mainrow">
            <td ><strong>Rank</strong></td>
                 <td><strong>Player</strong></td>
                 <td><strong>Team</strong></td>
                 <td><strong>Ball</strong></td>
                 <td><strong>Oponent</strong></td>
                 <td><strong>Season</strong></td>
             </tr>
             {
                 this.state.data.map((item,index)=>{
                     return(
                         <tr className="fast100content">
                             <td>{index+1}</td>
                             <td>{item.name}</td>
                             <td>{item.team}</td>
                             <td style={{backgroundColor:" rgb(158, 154, 154)"}}><strong>{item.balls}</strong></td>
                             <td>{item.opp}</td>
                             <td>{item.season}</td>
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
