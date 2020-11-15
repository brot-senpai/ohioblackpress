/*

//Step 4b) The chart component is relatively simple. As long as 
//the data format is the same as the others, minimal configuration
//is needed. Only need to change the title and x-axis label. 
//Data file should be placed in "./data" folder. 

import React from 'react';

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import BarChart from "components/Charts/barChart";

import adsData from "./data/ads_data.json";
import AdsInfo from "./ads_info";


export default function(){
    const size = {
        width: 900, 
        height: 600,
        leftMargin: 200}
    return(
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <div style={{paddingRight:10, paddingLeft:10}}>
                        <BarChart data={adsData} title="Advertisements" xLabel="Frequency" size={size}/>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <div >
                        <AdsInfo />
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
}


*/