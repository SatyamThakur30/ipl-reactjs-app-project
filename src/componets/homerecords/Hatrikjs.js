import React, { Component } from 'react'
import data from '../records/hatrik'
import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:data
    }
  render() {
     const{showballingbtn,hideBallingRecords}=this.props
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
             <tr>
                 <td colSpan="8" style={{padding:"0",margin:"0"}}><section> {showballingbtn?"":<button className="squardbtn" style={{paddingTop:"0.3rem1",paddingBottom:".2rem"}} onClick={hideBallingRecords}><i style={{marginBottom:"-1rem"}}  className="fa fa-sort-up"></i>Show Less</button>}
 </section></td>
             </tr>
            </tbody>
         </table>
     
         </div>
         
     </div>
    )
  }
}
