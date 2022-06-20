import React from 'react';
import * as d3 from 'd3';

//this function is a hook that accepts 2 arguments,
//renderChartFn is a callback that contains the d3.js code
//dependencies is an array that triggers re-render
export const useD3 = (renderChartFn, dependencies) => {
  //useRef stores a reference to a dom-node
  const ref = React.useRef();


  //useEffect runs a callback function
  React.useEffect(() => {
    //executes the callback function and passes 
    //d3.selection in as argument
    return renderChartFn(d3.select(ref.current));//inside renderChartFn, ref gets assigned a dom node
    //renderChartFn(svg) => { svg =  }


    //return () => {};
  }, dependencies);

  //returns the selected dom node
  return ref;
}
