import React, { Component } from 'react'
import Data from '../records/mostrundata'
import Fastest100 from './Fastest100'
import Fast50 from './Fast50'
import Mostsix from './Mostsix'
import './mostrun.css'

export default class Mostrun extends Component {
  state={
    data:Data,
    onclickrecord:false,
    showRecordbtn:true
  }
  
componentDidMount(){
  try {
  this.setState({
    onclickrecord:false,
    showRecordbtn:true
  })
  } catch (error) {
    console.log(error)
  }
}
showBattingRecords=()=>{
  this.setState({
    onclickrecord:!this.state.onclickrecord,
    showRecordbtn:!this.state.showRecordbtn
  })
}
hideBattingRecords=()=>{
  this.setState({
    onclickrecord:!this.state.onclickrecord,
    showRecordbtn:!this.state.showRecordbtn
  })
}
  render() {

    return (
      <div>
      <div className="mostrun-reactfragment">
      <section>
      <h2 style={{color: "rgb(11, 11, 122)"}}>Records</h2>
        <h2>Most Run (overall)</h2>
      </section>
      <div className="mostruntable-container">
        <table>
          <tbody>
            <tr className="mostrun-mainrow">
              
                
                 <td ><strong>Rank</strong></td>
                 <td><strong>Player</strong></td>
                 <td><strong>Match</strong></td>
                 <td><strong>Inn</strong></td>
                 <td><strong>Run</strong></td>
                 <td><strong>BF</strong></td>
                 <td><strong>Average</strong></td>
                 <td><strong>Strike</strong></td>
                 <td><strong>Six</strong></td>
                 <td><strong>Four</strong></td>
            </tr>
            {
              this.state.data.map((item,index)=>{
                return(
                  <tr className="mostruncontent">
                             <td>{index+1}</td>
                             <td className="batsmenname"><img src ={item.logo} alt="logo" width="40" height="40"></img><p>{item.name}</p></td>
                             <td>{item.match}</td>
                             <td>{item.inn}</td>
                             <td className="mostruns"><strong>{item.run}</strong></td>
                             <td>{item.bf}</td>
                             <td>{item.avarage}</td>
                             <td>{item.sr}</td>
                             <td>{item.six}</td>
                             <td>{item.four}</td>
                         </tr>
                )
              })
            }
            <tr>
              <td colSpan="10" style={{padding:"0",margin:"0"}}>{this.state.showRecordbtn?<button className="squardbtn" style={{paddingTop:"0.3rem1",paddingBottom:".2rem"}} onClick={this.showBattingRecords}>Batting Records<i style={{marginTop:"-1rem"}} className="fa fa-sort-down"></i></button>:""}
   </td>
            </tr>
          </tbody>
        </table>
   
      </div>
      
    </div>
    <div className={this.state.onclickrecord?"showbattingrecords":"hidebattingrecords"}>
      
      <section className="fix-six-fas">
      <Fastest100></Fastest100>
        <Fast50></Fast50>
        <Mostsix showRecordbtn={this.state.showRecordbtn} hideBattingRecords={this.hideBattingRecords}></Mostsix>
         
      </section>
      </div>
    </div>
    )
  }
}
