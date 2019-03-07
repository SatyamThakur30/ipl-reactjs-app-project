import React, { Component } from 'react'
import Slideshow from './home/Slideshow'
import Fixtures from './home/Fixtures'
import Pointstable from './home/Pointstable'
import Score from './home/Score'
import Nextmatch from './home/Nextmatch'
import Lastupdate from './home/Lastupdate'
export default class Home extends Component {
  render() {
    return (
   <React.Fragment>
     <div>
     <Slideshow></Slideshow>
     </div>
     <Score></Score>
     <div>
       <Nextmatch></Nextmatch>
     </div>
     <div>
       <Lastupdate></Lastupdate>
     </div>
     <div>
       <Fixtures></Fixtures>
     </div>
     <div>
       <Pointstable></Pointstable>
     </div>
   </React.Fragment>
    )
  }
}
