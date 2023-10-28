import React from 'react'
import "./Features.scss"

const Features = () => {
  return (
    <div className='features'>
        <div className="container">
        <div className="left">
        
          <h1>
          Get a shelf for your <br/>Business &<br/>let your profits thrive
          </h1>
          <button type="button" className="btn btn-primary btn-sm">Small button</button>
<button type="button" className="btn btn-secondary btn-sm">Small button</button>
          
        </div>
        
        <div className="right">
        <img className='one' src="./img/first.jpeg "  width="324px" height="224px"  alt="" />
        <img  className ="two" src="./img/second.png"width="445px" height="263px" alt="" />
     
  
     
        </div>
      </div>
    </div>
  );
}





export default Features
