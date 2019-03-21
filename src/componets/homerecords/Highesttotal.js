import React, { Component } from 'react'
import data from '../records/highesttotals'
import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:data
    }
  render() {
    return (
     <div className="reactfragment-team">
     <section>
         <h2>Highest Total</h2>
     </section>
         <div className="fast100overflow">
         <table>
            <tbody>
            <tr className="fast100-mainrow">
            <td ><strong>Rank</strong></td>
                 <td><strong>Team</strong></td>
                 <td><strong>Score</strong></td>
                 <td><strong>Opponent</strong></td>
                 <td><strong>Season</strong></td>
                 
             </tr>
             {
                 this.state.data.map((item,index)=>{
                     return(
                         <tr className="fast100content">
                             <td>{index+1}</td>
                             <td className="batsmenname" ><img src={item.logo} alt="logo" width="40" height="40"></img><p style={{alignSelf:"center"}}>{item.team}</p></td>
                             <td style={{backgroundColor:" rgb(158, 154, 154)"}}><strong>{item.score}</strong></td>
                             <td>{item.opponent}</td>
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
