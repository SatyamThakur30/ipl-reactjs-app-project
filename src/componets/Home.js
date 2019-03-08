import React, { Component } from 'react'
import Slideshow from './home/Slideshow'
import Fixtures from './home/Fixtures'
import Pointstable from './home/Pointstable'
import Score from './home/Score'
import Nextmatch from './home/Nextmatch'
import Lastupdate from './home/Lastupdate'
import Capholder from './home/Capholder'
import './home.css'
export default class Home extends Component {
  render() {
    return (
   <React.Fragment>
     
     <Slideshow></Slideshow>

     <Score></Score>
     <div className="container-main">
    <section className="matchcontent">
    <Nextmatch></Nextmatch>
    
    <Lastupdate></Lastupdate>
    </section>   
    <section className="capholdercontent">
    <Capholder></Capholder> 
    </section>
    
   
       
     </div>
       
     
  
    
     
   
    
   
       <Pointstable></Pointstable>
     
   
       <Fixtures></Fixtures>
       
   </React.Fragment>
    )
  }
}
 
