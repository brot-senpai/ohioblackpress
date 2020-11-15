import React from 'react';
import ImageViewer from "components/ImageViewer/imageViewer";
import image from './content/images/Aliened-American.png'
import '../../nplayout.css';

export default function (){

  return(
    <div className="info">
        <div>
            Aliened Americans
        </div>
        <div>
            <ImageViewer image={image} />
        </div>
    </div>
    
  )
}
