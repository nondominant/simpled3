import { useD3 } from '../hooks/useD3';
import { React, useState } from 'react';
import * as d3 from 'd3';


export default function ChartComponent({ setRef, data }) {
  try {
    if (!data.map) {
      console.log("no data provided")
      return null;
    }
  } catch {
    console.log("no data provided")
    return null;
  }
    //let ref = {}
  try {
    //ref holds the dom node assigned to 
    //useD3 = (renderChartFn, []) => { return ref}

    //svg = d3.select(ref.current)

    setRef = useD3(
      (svg) => {
      const colour = { Louis: "#4ff633", Tony: "#11ff8e", Peter: "#0f35e5", Dave: "#ee6af5", Kenny: "#de34de" }
      const height = 700;
      const width = 1200;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const hourStart = 0;
      const hourFinish = 24;

      const y1 = d3
        .scaleLinear()
        .domain([hourStart, hourFinish])
        .rangeRound([height - margin.top - margin.bottom, margin.bottom]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "#ff34ae")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        .attr("fill", "3eff99")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("fill", (d) => colour[d.name])
        .attr("class", "bar")
        .attr("x", (d) => x(d.name))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.log[d.log.length - 1]))
        .transition()
        .duration(500)
        .attr("height", function(d){ 
          return(
            y1(0) 
            - y1(d.log[d.log.length - 1]) 
            - (y1(0) - y1(d.log[0])))
        });
      svg
        .select(".plot-area")
        .attr("fill", "3eff99")
        .selectAll(".bar")
        .data(data)
        .exit().remove()
    },
    [data]);
  } catch {
    console.log("error with: ", data);
    return (<h1>fuck</h1>);
  }
    return (
      <svg ref={setRef}
      style={{
        height: "80vh",
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}>
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
      </svg>
    );
}

