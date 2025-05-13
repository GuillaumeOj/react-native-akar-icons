import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Clock: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <_Circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="m15 16-2.414-2.414A2 2 0 0 1 12 12.172V6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Clock };
export default Clock;
