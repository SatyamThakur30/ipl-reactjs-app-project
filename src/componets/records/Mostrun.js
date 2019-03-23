import React, { Component } from 'react'
import Data from './mostrundata'

import './mostrun.css'

export default class Mostrun extends Component {
  state={
    data:Data,
    
  }
  componentDidMount(){
    try {
      this.setState({
        data:this.state.data.sort((a,b)=>{return (b.run-a.run)})
      })
      
    } catch (error) {
      console.log(error)
    }
  }
  
  render() {

    return (
      
      <div className="mostrun-reactfragment">
      <section>
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
          
          </tbody>
        </table>
   
      </div>
      
    </div>
    
      
    
    )
  }
}
