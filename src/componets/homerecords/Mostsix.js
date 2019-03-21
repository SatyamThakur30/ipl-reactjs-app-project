import React, { Component } from 'react'
import data from '../records/mostsixes'
import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:data
    }
  render() {
      const{showRecordbtn,hideBattingRecords}=this.props;
    return (
     <div className="reactfragment">
     <section>
         <h2>Most Sixes (Overall)</h2>
     </section>
         <div className="fast100overflow">
         <table>
            <tbody>
            <tr className="fast100-mainrow">
            <td ><strong>Rank</strong></td>
                 <td><strong>Player</strong></td>
                 <td><strong>Innings</strong></td>
                 <td><strong>Sixes</strong></td>
                 <td><strong>Span</strong></td>
                 
             </tr>
             {
                 this.state.data.map((item,index)=>{
                     return(
                         <tr className="fast100content">
                             <td>{index+1}</td>
                             <td>{item.name}</td>
                             <td>{item.inn}</td>
                             <td style={{backgroundColor:" rgb(158, 154, 154)"}}><strong>{item.sixes}</strong></td>
                             <td>{item.span}</td>
                            
                         </tr>
                     )
                 })
             }
            </tbody>
         </table>
         <section> {showRecordbtn?"":<button className="recordbtn" style={{paddingTop:"0.3rem1",paddingBottom:".2rem"}} onClick={hideBattingRecords}><i style={{marginBottom:"-1rem"}}  className="fa fa-sort-up"></i>Show Less</button>}
 </section>
         </div>
     </div>
    )
  }
}
