import React, { Component } from 'react'
import {Slide} from 'react-slideshow-image'
import './slideshow.css'
export default class Slideshow extends Component {

       
  render() {
    return (
     // eslint-disable-next-line react/jsx-no-comment-textnodes
     <React.Fragment>
  
    <Slide {...properties} className="slide-container">
    <div className="each-slide" >
    <img className="slide-img" src={slideimages[0]} alt="slide">
           </img> 
            
    </div>
    <div className="each-slide">
    <img className="slide-img" src={slideimages[1]} alt="slide">
         </img>   
            
    </div>
    <div className="each-slide">
        <img className="slide-img" src={slideimages[2]} alt="slide">
        </img>     
       
    </div>
    <div className="each-slide">
        <img className="slide-img" src={slideimages[3]} alt="slide">
        </img>     
       
    </div>
    <div className="each-slide">
        <img className="slide-img" src={slideimages[4]} alt="slide">
        </img>     
       
    </div>
    <div className="each-slide">
        <img className="slide-img" src={slideimages[5]} alt="slide">
        </img>     
       
    </div>
    <div className="each-slide">
        <img className="slide-img" src={slideimages[6]} alt="slide">
        </img>     
       
    </div>
    <div className="each-slide">
        <img className="slide-img" src={slideimages[7]} alt="slide">
        </img>     
       
    </div>
</Slide>

</React.Fragment>
    )
  }
}

const slideimages = [
    './slides/csk.jpeg',
    './slides/mi.jpeg',
    './slides/rcb.jpg',
    './slides/kkr.jpeg',
    './slides/pj.jpg',
    './slides/srh.jpg',
    './slides/rr.jpg',
    './slides/dd.jpeg',

    ];
   
    const properties = {
        duration:3000,
        transitionDuration:500,
        infinite:true,
        indicators:true,
        arrows:true
    }