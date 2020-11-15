import React from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "./map_table"

import Map from "./d3_worldmap";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function MapContainer(props){
    
    const classes = useStyles();
    const agents = props.mapData;
    const [mapCenter, setMapCenter] = React.useState(props.center);
    const [arcs, setArcs] = React.useState(false);
    const [agent, setAgent] = React.useState([]);
    const [index, setIndex] = React.useState(0)
    const [scale, setScale] = React.useState(props.scale);
    const [state, setState] = React.useState({        
        name: '',
    });
    
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });        
        
        if(event.target.value===0){
            setMapCenter(props.center)
            setScale(props.scale)
            setArcs(false)
            setIndex(0)
        }
        else{
            setArcs(true)
            const a = agents[event.target.value-1]
            const mapcenter = {"lon":a.lon, "lat":a.lat}
            setMapCenter(mapcenter)
            setAgent(a)
            setScale(2500)
            setIndex(event.target.value)
        }  
    };   
    
    function Selector(){

        const SelectorLayout = () =>{
            
            if(props.mapForm.selectHeader==="Agent"){
                return(
                    <>
                    {agents.map((name, i) =>(
                        <option key={i+1} value={i+1}>
                             {`${name.lastName}, ${name.firstName}, City: ${name.city}, State: ${name.state}`}
                        </option>
                    ))}
                    </>
                )
            }
            else if(props.mapForm.selectHeader==="Periodical"){
                return(
                    <>
                    {agents.map((name, i) =>(
                        <option key={i+1} value={i+1}>
                             {`${name.newspaper}, Location: ${name.location}`}
                        </option>
                    ))}
                    </>
                )
            }
            else{
                return(<></>)
            }
        }
        
        return(
        <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
                {props.mapForm.selectHeader}
            </InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age-native-helper',
              }}
            >
              <option value={0}>ALL</option>
              <SelectorLayout />
              
            </NativeSelect>
            <FormHelperText>
                {props.mapForm.selectFooter}
            </FormHelperText>
          </FormControl>)
    }

    const TableInfo = () =>{
        if(props.mapForm.tableLeft===""){
            return(<></>)
        }
        else if(props.mapForm.tableLeft==="Agent Name:"){
            return(
                <Table  agent={agent} index={index}/>
            )
        }
        return(<></>)
    }
    return(
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <div style={{paddingRight:10, paddingLeft:10}}>
                    <Selector />
                </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                    <div style={{paddingRight:10, paddingLeft:10}}>
                        <Map                         
                        agent={agent}
                        arc={arcs}
                        mapData={props.mapData} 
                        center={mapCenter} 
                        origin={props.origin} 
                        scale={scale}/>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <div style={{paddingRight:10, paddingLeft:10}}>
                        <TableInfo />
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <props.info />
                </GridItem>
            </GridContainer>
        </div>
    )
}


MapContainer.propTypes = {
    
    scale: PropTypes.number,
    center: PropTypes.object,
    mapData: PropTypes.array,
    origin: PropTypes.array
}