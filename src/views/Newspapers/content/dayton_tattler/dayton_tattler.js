import React from 'react';
import '../../nplayout.css';
import ImageViewer from "components/ImageViewer/imageViewer";
import img1 from "./content/images/dt_vol1_02.png";

export default function (){

  return(
    <div>
        <div className="info">
            Dayton Tattler
        </div>
        <div>
            <ImageViewer image={img1} />
        </div>
    </div>
    
  )
}