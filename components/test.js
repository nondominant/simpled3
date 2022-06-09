import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

export default function ChartComponent({ data }) {
  try {
    
    const ref = useD3(
      (svg) => {
        // set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#canvas").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

        /*
// get the data
d3.csv("sales.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
    d.sales = +d.sales;
  });
  */

  // Scale the range of the data in the domains
  x.domain(data.map(d => { return d.name; }));
  y.domain([0, 24]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(data.map(e => e))
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", e => x(e.name))
      .attr("width", x.bandwidth())
      .attr("y", e => y(e.log[e.log.length - 1].time))
      .attr("height", e => y(e.log[e.log.length - 1].time - e.log[0].time))
  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));


    console.log("success with: ", data);




},
      //update when data[0].date changes
      [data[0].date]
    );
  } catch {
    console.log("error with: ", data);
    return (<h1>fuck</h1>);
  }
    return (
      <div id="canvas"></div>
    );
}

