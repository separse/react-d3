import { BackgroudCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { FaceContainer } from "./FaceContainer";
import { Mouth } from "./Mouth";

const width = 200;
const height = 200;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;

export const Face = () => (
    <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>
    <BackgroudCircle
      radius={centerY - strokeWidth / 2}
      strokeWidth={strokeWidth}
    />
    <Eyes />
    <Mouth />
  </FaceContainer>
)