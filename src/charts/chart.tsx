import { useState } from "react";
import { useD3 } from "../hooks";
import { Styles } from "./types";
import * as d3 from "d3";

type Props = {
  data: any[];
  styles: Styles;
};

const DEFAULT_BAR_HEIGHT = 20;
const DEFAULT_SCALE_FACTOR = 28;

export const Chart = ({ data, styles }: Props) => {
  const yScale = d3.scaleLinear().domain([0, 1000]).range([200, 0]);

  const ref = useD3((svg) => {
    const graph = svg.attr("height", "200px").attr("width", "500px");

    const bar = graph.selectAll("g").data(data).enter();

    bar
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => i * (styles.scaleFactor || DEFAULT_SCALE_FACTOR))
      .attr("y", (d) => yScale(d))
      .attr("width", "20px")
      .attr("height", (d) => 200 - yScale(d));

    bar
      .append("text")
      .attr("y", function (d) {
        return d * (styles.scaleFactor || DEFAULT_SCALE_FACTOR);
      })
      .attr("x", (styles.width || DEFAULT_BAR_HEIGHT) / 2)
      .attr("dx", "-8px")
      .text(function (d) {
        return d;
      });
  });

  return <svg ref={ref} />;
};
