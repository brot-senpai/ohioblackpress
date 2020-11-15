import React from 'react';
import { RViewer, RViewerTrigger } from 'react-viewerjs';
import './nplayout.css';

export default function(props){
  
  const options={
    toolbar:{
      prev: false,
      next: false
    }
  }
  const Front = () =>{

    if(props.width){      
      return(            
        <div className="center">
          <img src={props.image} alt="" className="photo" style={{maxWidth:props.width}}/> 
        </div>
      )
    }
    else{
      return(        
        <img src={props.image} alt="" className="photo" />        
      )
    }
  }
  
  return(
    <RViewer options={options} imageUrls={props.image} >
            <RViewerTrigger>            
            <div>
              <Front />
            </div>              
            </RViewerTrigger>
          </RViewer>
    
  )
}