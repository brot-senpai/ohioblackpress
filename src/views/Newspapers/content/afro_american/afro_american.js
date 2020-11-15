import React from 'react';
import '../../nplayout.css';
import ImageViewer from "components/ImageViewer/imageViewer";
import img1 from "./content/images/afro_a_v4_02.png";

export default function (){

  return(
    <div>
        <div className="info">
            The Afro-American
        </div>
        <div>
            <ImageViewer image={img1} />
        </div>
    </div>    
  )
}