import React, { useEffect, useRef } from 'react'
import { select } from 'd3-selection'
import { max } from 'd3-array'
import { scaleLinear, scaleBand } from 'd3-scale'
import { axisLeft, axisBottom } from 'd3-axis'
import * as d3 from 'd3';

function color(props){
    
    const len = [];
    for (let i = 0; i < props.length; i++){
        len.push(getRandomColor())
    }
    return len
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color1 = '#';
    for (var i = 0; i < 6; i++) {
      color1 += letters[Math.floor(Math.random() * 16)];
    }
    return color1;
  }

const BarChart = (props) => {
  let margin;

  let width, height;
  const data = props.data
  
  if(data.length > 0){
    margin = { top: 80, right: 10, bottom: 80, left: props.size.leftMargin }
    width = props.size.width - margin.left - margin.right
    height = props.size.height - margin.top - margin.bottom
  }
  else{
    margin = { top: 80, right: 10, bottom: 80, left: 10 }
    width = 500;
    height = 100
  }


  
  
  const d3svg = useRef(null)
  
  useEffect(() => {
    d3.selectAll("g").remove();
    if (data && d3svg.current) {
      let svg = select(d3svg.current)
      .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom])

      // scales
      const xMax = max(data, d => d.x)

      const xScale = scaleLinear()
        .domain([0, xMax + (xMax*.2)])
        .range([0, width])

      const yScale = scaleBand()
        .domain(data.map(d => d.y))
        .rangeRound([0, height])
        .paddingInner(0.25)
        

      // append group translated to chart area
      svg = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

      svg
        .append('g')
        .attr('class', 'bar-header')
        .attr('transform', `translate(0, ${-margin.top / 2})`)
        .append('text')
        .append('tspan')
        .text(props.title)
        
      // draw bars
      svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('y', d => yScale(d.y))
        .attr('width', d => xScale(d.x))
        .attr('height', yScale.bandwidth())
        .style('fill', function(d, i) {
          return color(data)[i % 4] // use colors in sequence
        })

      // draw axes
      const xAxis = axisBottom(xScale)
      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0,${height + margin.bottom / 10})`)
        .call(xAxis)
      svg
        .append('text')
        .attr('transform', `translate(${width/2},${height + margin.bottom /2})`)
        .style('text-anchor', 'middle')
        .text(props.xLabel)
        

      const yAxis = axisLeft(yScale).tickSize(0)
      svg
        .append('g')
        .attr('class', 'y axis')
        .attr('transform', `translate(${-margin.left / 10},0)`)
        .call(yAxis)
    }
  })

  return (
    <div>         
      <svg ref={d3svg} />
    </div>
  )
}

export default BarChart


