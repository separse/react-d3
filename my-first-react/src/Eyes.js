const eyeOffsetX = 20;
const eyeOffsetY = 20;
const eyeRadius = 10;

export const Eyes = () => (
  <>
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill="black"
      stroke="black"
    />
    <circle
      cx={+eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill="black"
      stroke="black"
    />
  </>
);
