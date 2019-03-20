import React, { Component } from 'react'
import data from './mixrecords'
import './teamshome.css'
// import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:data
    }
  render() {
      const{showmixbtn,hideMixRecords}=this.props
    return (
     <div className="reactfragment-team">
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
             <tr>
                 <td colSpan="12" style={{padding:"0",margin:"0"}}><section> {showmixbtn?"":<button className="squardbtn" style={{paddingTop:"0.3rem1",paddingBottom:".2rem"}} onClick={hideMixRecords}><i style={{marginBottom:"-1rem"}}  className="fa fa-sort-up"></i>Show Less</button>}
 </section></td>
             </tr>
            </tbody>
           
         </table>
         
         </div>
         
     </div>
    )
  }
}
