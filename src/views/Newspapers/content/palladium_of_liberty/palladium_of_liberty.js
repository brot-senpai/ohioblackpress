import React from 'react';

import ImageViewer from "components/ImageViewer/imageViewer";
import Palladium_of_Liberty from './content/images/i3p1-pol.jpg'

import '../../nplayout.css';

export default function PoL(){
  
  return(
    <div>       
          <div className="info">
            <div id="edn6">              
                <div id="edn1">                  
                    <div id="edn1">                      
                      <span style={{fontSize:15}}>
                        <span /*style={{fontFamily:"Times New Roman"}}*/>The <strong><i>Palladium of Liberty </i></strong> is the first newspaper, published by Black Ohioans to promote African American civil rights and to unite their communities in Ohio before the Civil War. David Jenkins and other Black community leaders lunched the newspaper with its first issue on December 27, 1843. They published weekly in total 32 issues until financial deficiency forced the editors to cease its publication with the last issue on November 13, 1844. Its motto is &ldquo;Devoted to the Interests of the Colored People Generally.&rdquo; The newspaper was widely circulated in the state of Ohio, especially large Black communities in urban areas, as the long lists of agents and subscribers demonstrates. Most of the prints remain well preserved in the <a style={{color:"#0563c1", textDecoration:"underline"}} target="_blank" rel="noopener noreferrer" href="http://dbs.ohiohistory.org/africanam/html/nwspaper/liberty.html">Ohio History Connection</a>, and they are available <a style={{color:"#0563c1", textDecoration:"underline"}} target="_blank" rel="noopener noreferrer" href="https://digital-collections.columbuslibrary.org/digital/search/searchterm/PalladiumofLiberty1843-12-27to1844-11-13">online</a> through the African American Collection at the <a style={{color:"#0563c1", textDecoration:"underline"}} target="_blank" rel="noopener noreferrer" href="https://www.columbuslibrary.org/">Columbus Metropolitan Library</a>.</span></span>                                         
                      <div>
                        <div id="edn30">&nbsp;                        
                      </div>                                     
                </div>
              </div>
            </div>
          </div>
        </div>     
        <div>
            <ImageViewer image={Palladium_of_Liberty} />                       
        </div>     
    </div>
    
  )
}

