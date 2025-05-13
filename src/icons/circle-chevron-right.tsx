import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const CircleChevronRight: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <_Circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="m10.5 8 4 4-4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { CircleChevronRight };
export default CircleChevronRight;
