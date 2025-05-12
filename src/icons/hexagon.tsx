import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Hexagon: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M11.029 2.54a2 2 0 0 1 1.942 0l7 3.888A2 2 0 0 1 21 8.177v7.646a2 2 0 0 1-1.029 1.749l-7 3.888a2 2 0 0 1-1.942 0l-7-3.889A2 2 0 0 1 3 15.824V8.177a2 2 0 0 1 1.029-1.749z"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Hexagon };
export default Hexagon;
