import React, { Component } from 'react'
import data from './mostwicket'
import Hatrikjs from './Hatrikjs'
import './mostwicket.css'
// import './fast100.css'
export default class Fastest100 extends Component {
    state={
        data:data,
        onclickBalling:false,
    showballingbtn:true
    }
    componentDidMount(){
        try {
        this.setState({
            onclickBalling:false,
            showballingbtn:true
        })
        } catch (error) {
          console.log(error)
        }
      }
      showBallingRecords=()=>{
        this.setState({
            onclickBalling:!this.state.onclickBalling,
            showballingbtn:!this.state.showballingbtn
        })
      }
      hideBallingRecords=()=>{
        this.setState({
          
            onclickBalling:!this.state.onclickBalling,
            showballingbtn:!this.state.showballingbtn
        })
      }
      
  render() {
    return (
        <div>
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
             <tr>
              <td colSpan="10" style={{padding:"0",margin:"0"}}>      {this.state.showballingbtn?<button className="squardbtn" style={{paddingTop:"0.3rem1",paddingBottom:".2rem"}} onClick={this.showBallingRecords}>Balling Records<i style={{marginTop:"-1rem"}} className="fa fa-sort-down"></i></button>:""}
   
   </td>
            </tr>
         </tbody>        
          </table>
   
         </div>
         </div>
         <div className={this.state.onclickBalling?"showballingrecords":"hideballingrecords"}>
        
         <Hatrikjs hideBallingRecords={this.showBallingRecords} showballingbtn={this.state.showballingbtn}></Hatrikjs>
         
         </div>
     </div>
    )
  }
}
