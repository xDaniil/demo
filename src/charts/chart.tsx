import * as d3 from "d3";
import styled from "styled-components";
import { useD3 } from "../hooks";

type Props = {
  data: { items: { timestamp: number; value: number }[] }[];
};

const HEIGHT = 300;
const WIDTH = 750;

const DIMENSIONS = {
  margin: {
    top: 30,
    right: 30,
    bottom: 50,
    left: 60,
  },
};

const ChartContainer = styled.div`
  width: ${WIDTH}px;
  display: flex;
  flex-wrap: wrap;

  & > * {
    width: 100%;
  }
`;

export const Chart = ({ data }: Props) => {
  const { margin } = DIMENSIONS;
  const timeDomain = d3
    .extent(data[0].items, (d) => d.timestamp)
    .map((timestamp) => timestamp || 0);
  const xScale = d3.scaleTime().domain(timeDomain).range([0, WIDTH]);

  const yScale = d3
    .scaleLinear()
    .domain([
      (d3.min(data[0].items, (d) => d.value) || 100) + 100,
      (d3.max(data[0].items, (d) => d.value) || 100) - 100,
    ])
    .range([HEIGHT, 0]);

  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove();

      svg
        .append("rect")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("fill", "black");

      const graph = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const xAxis = d3.axisBottom(xScale).ticks(5).tickSize(-HEIGHT);
      const xAxisGroup = graph
        .append("g")
        .attr("transform", `translate(0, ${HEIGHT - margin.bottom})`)
        .call(xAxis);
      xAxisGroup.select(".domain").remove();
      xAxisGroup.selectAll("line").attr("stroke", "rgba(255, 255, 255, 0.2)");
      xAxisGroup
        .selectAll("text")
        .attr("opacity", 0.5)
        .attr("color", "white")
        .attr("font-size", "0.75rem");

      const yAxis = d3
        .axisLeft(yScale)
        .ticks(5)
        .tickSize(-WIDTH)
        .tickFormat((val) => `${val}λ`);
      const yAxisGroup = graph.append("g").call(yAxis);
      yAxisGroup.select(".domain").remove();
      yAxisGroup.selectAll("line").attr("stroke", "rgba(255, 255, 255, 0.2)");
      yAxisGroup
        .selectAll("text")
        .attr("opacity", 0.5)
        .attr("color", "white")
        .attr("font-size", "0.75rem");

      const line = d3
        .line()
        .x((d) => xScale(d[0]))
        .y((d) => yScale(d[1]));

      graph
        .selectAll(".line")
        .data(data)
        .enter()
        .append("path")
        .attr("fill", "none")
        .attr("stroke", (d) => "green")
        .attr("stroke-width", 3)
        .attr("d", (d) =>
          line(d.items.map((dItem) => [dItem.timestamp, dItem.value]))
        );
    },
    [...data]
  );

  return (
    <ChartContainer>
      <svg width={WIDTH} height={HEIGHT} ref={ref} />
    </ChartContainer>
  );
};
