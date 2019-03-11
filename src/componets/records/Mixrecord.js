import React, { Component } from 'react'
import data from './mixrecords'
import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:data
    }
  render() {
    return (
     <div className="reactfragment">
     <section>
         <h2>Miscellaneous Records</h2>
     </section>
         <div className="fast100overflow">
         <table>
            <tbody>
            <tr className="fast100-mainrow">
            <td ><strong>S.NO.</strong></td>
                 <td><strong>Record</strong></td>
                 <td><strong>Score</strong></td>
                 <td><strong>Team</strong></td>
                 <td><strong>Opponent</strong></td>
                 <td><strong>Season</strong></td>
                 
             </tr>
             {
                 this.state.data.map((item,index)=>{
                     return(
                         <tr className="fast100content">
                             <td>{index+1}</td>
                             <td style={{backgroundColor:" rgb(158, 154, 154)"}}><strong>{item.record}</strong></td>
                             <td>{item.score}</td>
                             <td className="batsmenname" ><img src={item.logo} alt="logo" width="40" height="40"></img><p style={{alignSelf:"center"}}>{item.team}</p></td>
                             
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
