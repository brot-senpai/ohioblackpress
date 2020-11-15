/*

//Step 4a) This step is a bit complicated and may need custom configuration
//based on data. Data file is placed in "./content/data" folder. 

import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Chart from 'components/Charts/barChart';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import SubInfo from './sub_info';
import subData from './data/sub_data.json';
import NativeSelect from '@material-ui/core/NativeSelect';

const dates = ["04-03-1844", "05-08-1844", "06-05-1844", "07-10-1844", "09-25-1844"]


const SubMenu =()=>{
    const [state, setState] = React.useState('')
  
    const data = [];

    subData.forEach(e => {
        if(e.date === state){
        data.push(e)
        }
    })
    const handleChange = (event) => {        
        setState([])
        setState(event.target.value,
        );
    };

    const size = {
        width: 900, 
        height: 900,
        leftMargin: 100,
    };
    
    const Selector =()=>{
        return(
            <FormControl style={{left: "10px", minWidth: 200}}>
                <InputLabel shrink htmlFor="archive-native-simple">Dates</InputLabel>
                <NativeSelect
                    value={state}                 
                    inputProps={{
                        date: '',                        
                      }}
                    input={<Input id="archive-native-simple"/>}
                    onChange={handleChange}      
                >
                    <option value="">SELECT DATE</option>
                    {dates.map((d, i) => (
                        <option key={d} value={d}>{d}</option>
                    ))}                                        
                </NativeSelect>                                      
            </FormControl>
        )
    }
    return (
        <div>
            <GridContainer >
                <GridItem xs={12} sm={12} md={12} >
                    <div style={{paddingLeft:10, paddingTop:10, margin:"auto"}}>
                        <Selector />
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <div style={{paddingRight:10, paddingLeft:10}}> 
                        <Chart data={data} title="Subscribers" xLabel="Cost in Cents" size={size}/>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <div >
                        <SubInfo />
                    </div>
                </GridItem>
            </GridContainer>            
        </div>
    )
}


export default SubMenu

*/