import React, { Component } from 'react'
import playoffs from './playoffsdata'
import Lastupdate from './Lastupdate'
import Capholder from './Capholder'
import './nextmatch.css'

export default class Nextmatch extends Component {
   state= {
       data:playoffs
   }
   async componentDidMount(){
    try {
        const match1 = await this.state.data.filter((item)=>item.id ==3);
       
        this.setState({
            data:match1
      
        })  
    } catch (error) {
      console.log(error);
        
    }
   }


  render() {
   
      
    return (
     <div className="next-last-container">
     
        <div className="container">
        
      <section className="titlenextmatch">
          <h2>Upcoming Match</h2>
      </section>
      {
          this.state.data.map((item)=>{
              return(
                 <div className="content-container">
                 <section className="content">
                 <p>Match:<strong>{item.match}</strong></p>
                  <p>Teams:<strong>{item.teams}</strong></p>
                  <p>Schedule:<strong>{item.date} {item.timing}</strong></p>
            
                  <p>Venue:{item.venue}</p>
                 
                 </section>
                 </div>
              )
          })
      }
      <Lastupdate ></Lastupdate>
      </div>
      <Capholder></Capholder>
     </div>
    )
  }
}

