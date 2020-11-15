/*
//Delete the foward-shlash/back-shlash and star at top and bottom file to 
//remove block comment. 

//Delete double forward-shlash to remove line comment.

//Step 1) This file is the start of a newspaper component. 
//When complete, go to the newspaper_tab_template.js file for
//step 2. 


//Leave this import alone. 
import React from 'react';

//User could edit nplayout.css for other styling options. 
import '../../nplayout.css';

//The ImageViewer component as the name implies, it for showing images on webpage.
//It has option like zoom, pan and other. 
import ImageViewer from "components/ImageViewer/imageViewer";

//Line below is an exemple to import image into this file. 
//To show imported image, put "img1" (could name this anything) 
//inside the <ImageViewer /> component. Example below. 
//Place images into "./conent/images" folder.

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


*/