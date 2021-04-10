import { arc } from "d3";

const mouthWidth = 10;
const mouthRadius = 40;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthWidth + mouthRadius)
  .startAngle(Math.PI * 0.6)
  .endAngle(Math.PI * 1.4);

export const Mouth = () => <path d={mouthArc()} />;
