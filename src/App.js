import "./App.css";
// import { useCallback } from "react";
import { useState, useEffect } from "react";
// import { Face } from "./Face";
// import { range, svg } from "d3";
import { csv } from "d3";
import { message } from "./message";

// const array = range(9 * 3);

// export const App = () => array.map(() => <Face />);

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

export const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return <pre>{data ? message(data) : "Loading..."}</pre>;
};
