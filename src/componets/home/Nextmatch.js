import React, { Component } from 'react'
import Fixturesdata from './Fixturesdata'
import Lastupdate from './Lastupdate'
import Capholder from './Capholder'
import './nextmatch.css'

export default class Nextmatch extends Component {
   state= {
       data:Fixturesdata
   }
   async componentDidMount(){
    try {
        const match1 = await this.state.data.filter((item)=>item.id ==39);
       
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
                 <p>Match:<strong>{item.id}</strong></p>
                  <p>Teams:{item.teams}</p>
                  <p>Schedule:{item.date} {item.timing}</p>
            
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

