import React, { Component } from 'react'
import teamWins from '../records/teamsdata'
import Highesttotal from './Highesttotal'
import Lowesttotal from './Lowesttotal'
import Mixrecord from './Mixrecord'
import './teamshome.css'
// import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:teamWins,
        onclickmix:false,
        showmixbtn:true
    }
    componentDidMount(){
        try {
        this.setState({
          onclickmix:false,
          showmixbtn:true
        })
        } catch (error) {
          console.log(error)
        }
      }
      showMixRecords=()=>{
        this.setState({
          onclickmix:!this.state.onclickmix,
          showmixbtn:!this.state.showmixbtn
        })
      }
      hideMixRecords=()=>{
        this.setState({
          onclickmix:!this.state.onclickmix,
          showmixbtn:!this.state.showmixbtn
        })}
      
  render() {
    return (
        <div>
     <div className="reactfragment-team">
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
             <tr>
                  <td colSpan="8" style={{padding:"0",margin:"0",width:"100%"}}>  {this.state.showmixbtn?<button className="squardbtn" style={{paddingTop:"0.3rem1",paddingBottom:".2rem"}} onClick={this.showMixRecords}>More Unique Records<i style={{marginTop:"-1rem"}} className="fa fa-sort-down"></i></button>:""}
   </td>        
                         </tr>
            </tbody>
         </table>
       
         </div>
   
     </div>
   
     <div className={this.state.onclickmix?"showmixrecords":"hidemixrecords"}>
     <Highesttotal></Highesttotal>
         <Lowesttotal></Lowesttotal>
         <Mixrecord showmixbtn={this.state.showmixbtn} hideMixRecords={this.showMixRecords}></Mixrecord>
     </div>
   
     </div>
    )
  }
}
