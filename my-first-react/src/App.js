import "./App.css";
import { Face } from "./Face";
import { range } from "d3";

const array = range(9*3);

export const App = () => array.map(() => <Face />);
