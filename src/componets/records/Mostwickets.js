import React, { Component } from 'react'
import data from './mostwicket'


import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:data,
       
    }
    componentDidMount(){
        try {
          this.setState({
            data:this.state.data.sort((a,b)=>{return (b.wkts-a.wkts)})
          })
          
        } catch (error) {
          console.log(error)
        }
      }
     
      render() {
    return (
        
     <div className="reactfragment">
     <section>
         <h2>Most Wickets</h2>
     </section>
         <div className="fast100overflow">
         <table>
            <tbody>
            <tr className="fast100-mainrow">
            <td ><strong>Rank</strong></td>
                 <td><strong>Bowler</strong></td>
                 <td><strong>Team</strong></td>
                 <td><strong>Innings</strong></td>
                 <td><strong>Wickets</strong></td>
                 <td><strong>Span</strong></td>
                 
             </tr>
             {
                 this.state.data.map((item,index)=>{
                     return(
                         <tr className="fast100content">
                             <td>{index+1}</td>
                             <td>{item.bowler}</td>
                             
                             <td className="batsmenname" ><img src={item.logo} alt="logo" width="40" height="40"></img><p style={{alignSelf:"center"}}>{item.team}</p></td>
                             <td>{item.inn}</td>
                             <td style={{backgroundColor:" rgb(158, 154, 154)"}}><strong>{item.wkts}</strong></td>
                             <td>{item.span}</td>
                            
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
