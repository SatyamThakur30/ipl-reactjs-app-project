import React, { Component } from 'react'
import Slideshow from './home/Slideshow'
import Fixtures from './home/Fixtures'
import Pointstable from './home/Pointstable'
import Score from './home/Score'
import Nextmatch from './home/Nextmatch'
import Logoslideshow from './home/Logoslideshow'
import SquardHome from './home/SquardHome'
import Homerecords from './homerecords/Homerecords'
import Playoff from './home/Playoff'
import './home.css'
export default class Home extends Component {
  render() {
    return (
   <React.Fragment>
    <div style={{overflowX:"hidden"}}>
    <Score></Score>
     <Slideshow></Slideshow>

     <div className="container-main">
    <section className="matchcontent">
    <Nextmatch></Nextmatch>
     </section>
    </div>
      <Playoff></Playoff>
        <Pointstable></Pointstable>
      <Fixtures></Fixtures>
      <SquardHome></SquardHome>
      
    <Homerecords></Homerecords>
       <Logoslideshow></Logoslideshow>
    </div>
   </React.Fragment>
    )
  }
}
      
     
      
  
    
      
   
       
   
     
  
    
     
   
    
   
    
 
