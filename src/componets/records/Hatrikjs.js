import React, { Component } from 'react'
import data from './hatrik'
import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:data
    }
  render() {
    return (
     <div className="reactfragment">
     <section>
         <h2>Hat-riks</h2>
     </section>
         <div className="fast100overflow">
         <table>
            <tbody>
            <tr className="fast100-mainrow">
            <td ><strong>S.NO.</strong></td>
                 <td><strong>Bowler</strong></td>
                 <td><strong>Team</strong></td>
                 <td><strong>Opponent</strong></td>
                 <td><strong>Season</strong></td>
                 
             </tr>
             {
                 this.state.data.map((item,index)=>{
                     return(
                         <tr className="fast100content">
                             <td>{index+1}</td>
                             <td>{item.bowler}</td>
                             <td>{item.team}</td>
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
