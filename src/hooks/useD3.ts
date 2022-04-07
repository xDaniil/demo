import React from "react";
import * as d3 from "d3";

export const useD3 = (
  renderChartFn: (
    svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>
  ) => unknown,
  ...dependencies: any[]
) => {
  const ref = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current));
  }, [...dependencies]);

  return ref;
};
