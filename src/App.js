import "./App.css";
import * as d3 from "d3";
// import { useState, useCallback } from "react";
// import { Face } from "./Face";
// import { range, svg } from "d3";

// const array = range(9 * 3);

// const width = 960;
// const height = 500;
// const circleRadius = 30;
// const initialMousePosition = { x: width / 2, y: height / 2 };

// export const App = () => array.map(() => <Face />);

// export const App = () => {
//   const [mousePosition, setMousePosition] = useState(initialMousePosition);
//   const handleMouseMove = useCallback(
//     (event) => {
//       const { clientX, clientY } = event;
//       setMousePosition({ x: clientX, y: clientY });
//     },
//     [setMousePosition]
//   );
//   return (
//     <svg width={width} height={height} onMouseMove={handleMouseMove}>
//       <circle
//         cx={mousePosition.x}
//         cy={mousePosition.y}
//         r={circleRadius}
//       ></circle>
//     </svg>
//   );
// };

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

//   With fetch, async, await -------------------------------------

// const fetchText = async (url) => {
//   const response = await fetch(url);
//   return await response.text();
// };
// fetchText(csvUrl).then((text) => {
//   const data = d3.csvParse(text);
//   let message = "";
//   message = message + Math.round(text.length / 1024) + " kB\n";
//   message = message + data.length + " rows\n";
//   message = message + data.columns.length + " columns";
//   document.querySelector("#message-container").textContent = message;
// });

// With d3 csv ----------------------------------------------------

d3.csv(csvUrl).then((data) => {
    console.log(d3.csvFormat(data));
  let message = "";
  message = message + Math.round(d3.csvFormat(data).length / 1024) + " kB\n";
  message = message + data.length + " rows\n";
  message = message + data.columns.length + " columns";
  document.querySelector("#message-container").textContent = message;
});
export const App = () => <pre id="message-container"></pre>;
