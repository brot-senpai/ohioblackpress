import React, {useRef, useEffect} from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import PropTypes from "prop-types";

import world from '../../assets/data/topojson/countries-50m.json';
import states from '../../assets/data/topojson/states-10m.json';


const width = 975;
const height = 610;

function Map(props){

    const ref = useRef();

    useEffect(()=>{
        const svg = d3.select(ref.current)
                    .attr("width", width)
                    .attr("height", height) 
                                      
    },[])

    useEffect(()=>{
        
        drawMap();        
                    
    },[props]);

    const drawMap = () =>{
        
        
        const svg = d3.select(ref.current)
        .append("svg")
        
        .call(d3.zoom().on("zoom", function () {
            svg.attr("transform", d3.event.transform)
         })) 
         .append("g")
         
        
        const fake = d3.zoom()
        const projection = d3.geoMercator()
                    .scale(props.scale)
                    .center([props.center.lon, props.center.lat])
                    .translate([ width/2, height/2 ])
                    
        const path = d3.geoPath()
                    .projection(projection)

        
            svg.append("g")
                .attr("fill", "white")
                .attr("fill-opacity","0.5")
                .attr("cursor", "pointer")
                .attr("stroke", "black")
                .attr("stroke-width", ".4")
                .attr("stroke-linejoin", "round")
                .selectAll("path")
                .data(topojson.feature(world, world.objects.countries).features)
                //.filter(function(d){return d.id===826})
                .join("path")
                //.on("click", clicked)
                .attr("d", path)
                .append("title")
                .text(d => d.properties.name)

            svg
                .append("g")
                .attr("fill", "white")
                .attr("fill-opacity","0.5")
                .attr("cursor", "pointer")
                .attr("stroke", "black")
                .attr("stroke-width", ".4")
                .attr("stroke-linejoin", "round")
                .selectAll("path")
                .data(topojson.feature(states, states.objects.states,).features)
                .join("path")
                //.on("click", clicked)
                .attr("d", path)
                .append("title")
                .text(d => d.properties.name)

            
                
                const drawMarker = () =>{    
              
                    svg.append("g")
                        .call(d3.zoom().on("zoom", function () {
                            svg.attr("transform", d3.event.transform)
                        }))
                        .selectAll("path")
                        .data(props.mapData)
                        .enter()                        
                        .append("circle")                
                        .attr("cx", function(d){return projection([d.lon, d.lat])[0]})
                        .attr("cy", function(d){return projection([d.lon, d.lat])[1]})
                        .attr("r", 10)                
                        .style("fill", "69b3a2")
                        .attr("stroke", "blue")
                        .attr("stroke-width", 3)
                        .attr("fill-opacity", .4)                            
                        .on("mouseover", function(d){
                            d3.select(this)
                            .attr("stroke", "red")
                            .append("title")
                            .text(function(d){return props.agent.lastName + ", "+ props.agent.firstName+"\n"+
                            props.agent.city +", "+props.agent.state})
                        })
                        .on("mouseout", function(){d3.select(this).attr("stroke", "blue")})
                    }
                drawMarker();
                
        }

        
    
    return(
        <div>
            <svg ref={ref}/>
        </div>
    )
}


export default Map