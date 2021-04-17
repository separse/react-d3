import "./App.css";
// import { useCallback } from "react";
import { useState, useEffect } from "react";
// import { Face } from "./Face";
// import { range, svg } from "d3";
import { csv, arc, pie, path } from "d3";

// const array = range(9 * 3);

// export const App = () => array.map(() => <Face />);

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = arc().innerRadius(0).outerRadius(width);

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

export const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);
  const colorPie = pie().value(1);
  if (data) {
    return (
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {
            colorPie(data).map((d) => (
              <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
            ))
            // data.map((d, i) => (
            //   <path
            //     fill={d["RGB hex value"]}
            //     d={pieArc({
            //       startAngle: (i / data.length) * 2 * Math.PI,
            //       endAngle: ((i + 1) / data.length) * 2 * Math.PI,
            //     })}
            //   />
            // ))
          }
        </g>
      </svg>
    );
  } else {
    return <pre>"Loading..."</pre>;
  }
};
