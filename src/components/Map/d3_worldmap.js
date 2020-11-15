import React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import PropTypes from "prop-types";

import world from '../../assets/data/topojson/countries-50m.json';
import states from '../../assets/data/topojson/states-10m.json';
//import us from '../../assets/data/topojson/nation-10m.json';

import './mapStyle.css';

const width = 975;
const height = 610;

export default function Map(props) {
    const d3svg = React.useRef(null)
    const projection = d3.geoMercator()
                        .scale(props.scale)
                        .center([props.center.lon, props.center.lat])
                        .translate([ width/2, height/2 ])
    const path = d3.geoPath().projection(projection)
    
    
    
    React.useEffect(() =>{
        

            const zoom = d3.zoom()
                .scaleExtent([1, 8])
                .on("zoom", zoomed)
                
            const fake = d3.zoom()
                
            const svg = d3.select(d3svg.current)
                        .attr("viewBox", [0, 0, width, height])
                        
            
            
        const drawMap = ()=>{
            svg
                .append("g")
                .attr("fill", "white")
                .attr("fill-opacity","0.5")
                .attr("cursor", "pointer")
                .attr("stroke", "black")
                .attr("stroke-width", ".4")
                .attr("stroke-linejoin", "round")
                .selectAll("path")
                .data(topojson.feature(world, world.objects.countries).features)
                
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

                
            
                
        }
        const drawMarker = () =>{    
              
            svg.append("g")
                .selectAll("path")
                .data(props.mapData)
                .enter()                
                .append("circle")                
                .attr("cx", function(d){ 
                    if(d===props.agent){ 
                        return projection([d.lon, d.lat])[0]}
                    else{return projection([props.agent.lon, props.agent.lat])[0]}
                })
                .attr("cy", function(d){ 
                    if(d===props.agent){ 
                        return projection([d.lon, d.lat])[1]}
                    else{return projection([props.agent.lon, props.agent.lat])[1]}
                })
                .attr("r", 10)                
                .style("fill", "69b3a2")
                .attr("stroke", "blue")
                .attr("stroke-width", 3)
                .attr("fill-opacity", .4)                            
                .on("mouseover", function(d){
                    d3.select(this)
                    .attr("stroke", "red")
                    .append("title")
                    .text(function(d){
                        if(props.agent.newspaper){
                            return props.agent.newspaper+"\n"+props.agent.location
                        }
                        else{
                            return props.agent.lastName + ", "+ props.agent.firstName+"\n"+
                        props.agent.city +", "+props.agent.state
                        }
                    })
                })
                .on("mouseout", function(){d3.select(this).attr("stroke", "blue")}) 
                
                svg.call(fake)
			
                
		}
        
        const drawArcs = () =>{
            svg.append("g")                
                .attr("cursor", "pointer")
                .attr("stroke", "red")
                .attr("stroke-width", ".5")
                .attr("fill", "none")                
                .selectAll("path")
                .data(props.mapData)
                .enter()
                .append("path")                
                .attr('d', function(d){
                    return lngLatToArc(d, props.origin, 'lon', 'lat', 5);
                })
                .on("mouseover", function(d){
                    d3.select(this)
                    .attr("stroke", "blue")
                    .append("title")
                    .text(function(d){return d.firstName + ", "+ d.lastName+"\n"+
                    d.city +", "+d.state})
                })
                .on("mouseout", function(){d3.select(this).attr("stroke", "red")}) 
                
                svg.call(zoom)
        }

        if(props.arc===false){   
            d3.selectAll("g").remove()         
            drawMap()
            drawArcs()
        }
        else{
            d3.selectAll("g").remove()
            drawMap()
            drawMarker()
           
        }
        
                
            
        //svg.call(zoom)
            
            function lngLatToArc(d, from, lon, lat, bend){
                
                bend = bend || 1;
                
                var sourceLngLat = from,
                        targetLngLat = [d[lon], d[lat]];
               
                if (targetLngLat && sourceLngLat) {
                    var sourceXY = projection( sourceLngLat ),
                        targetXY = projection( targetLngLat );
        
                    
                    var sourceX = sourceXY[0],
                            sourceY = sourceXY[1];
        
                    var targetX = targetXY[0],
                            targetY = targetXY[1];
                    
                    var dx = targetX - sourceX,
                            dy = targetY - sourceY,
                            dr = Math.sqrt(dx * dx + dy * dy)*bend;
        
                    
                    var west_of_source = (targetX - sourceX) < 0;
                    if (west_of_source) return "M" + targetX + "," + targetY + "A" + dr + "," + dr + " 0 0,1 " + sourceX + "," + sourceY;
                    return "M" + sourceX + "," + sourceY + "A" + dr + "," + dr + " 0 0,1 " + targetX + "," + targetY;
                    
                } else {
                    return "M0,0,l0,0z";
                }
            }
            /* function reset(){
                svg.transition().duration(750).call(
                    zoom.transform,
                    d3.zoomIdentity,
                    d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
                  );
                
            } */
            function zoomed() {
                svg
                .selectAll('path') // To prevent stroke width from scaling
                .attr('transform', d3.event.transform);
               
                
              }
            /* function clicked(d) {
                const [[x0, y0], [x1, y1]] = path.bounds(d);
                d3.event.stopPropagation();
                svg.transition().duration(750).call(
                zoom.transform,
                d3.zoomIdentity
                    .translate(width / 2, height / 2)
                    .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
                    .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
                d3.mouse(svg.node())
                );
            } */
            
        
    })

    return(        
        <div style={{backgroundColor:"rgba(117, 184, 255, 0.2)"}}>
            <svg ref={d3svg}/>        
        </div>        
    )
}



Map.propTypes = {
    scale: PropTypes.number,
    center: PropTypes.object,
    mapData: PropTypes.array,
    origin: PropTypes.array
}