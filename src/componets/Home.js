import React, { Component } from 'react'
import Slideshow from './home/Slideshow'
import Fixtures from './home/Fixtures'
import Pointstable from './home/Pointstable'
import Score from './home/Score'
import Nextmatch from './home/Nextmatch'
import Logoslideshow from './home/Logoslideshow'
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
    {/* <section className="capholdercontent">
    <Capholder></Capholder> 
    </section> */}
    
   
       
     </div>
       
     
  
    
     
   
    
   
       <Pointstable></Pointstable>
     
   
       <Fixtures></Fixtures>
       <Logoslideshow></Logoslideshow>
    </div>
   </React.Fragment>
    )
  }
}
 
