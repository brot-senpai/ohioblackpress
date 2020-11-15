import React from 'react';
import * as d3 from 'd3';
import { select } from 'd3-selection';

export default function LineChart (props){

    const d3svg = useRef(null);
    const margin = ({top: 20, right: 30, bottom: 30, left: 40})
    const height = 500;
    const width = 500;


    React.useEffect(() =>{
        if (data && d3svg.current){
            let svg = select(d3svg.current)

            const line = d3.line()
                .defined(d => !isNaN(d.value))
                .x(d => x(d.date))
                .y(d => y(d.value))
            
            const x = d3.scaleUtc()
                .domain(d3.extent(data, d => d.date))
                .range([margin.left, width = margin.right])

            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.value)]).nice()
                .range([height - margin.bottom, margin.top]);

            const xAxis = g => g
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

            const yAxis = g => g
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
                .call(g => g.select(".domain").remove())
                .call(g => g.select(".tick:last-of-type text").clone()
                    .attr("x", 3)
                    .attr("text-anchor", "start")
                    .attr("font-weight", "bold")
                    .text(data.y))

            
            svg.append("g")
                .call(xAxis);
        }
    })
}