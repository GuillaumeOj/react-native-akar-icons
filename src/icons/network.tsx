import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Network: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <_Circle
          cx="18"
          cy="5"
          r="3"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <_Circle
          cx="18"
          cy="19"
          r="3"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <_Circle
          cx="6"
          cy="12"
          r="3"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="m15.408 6.512-6.814 3.975m6.814 7.001-6.814-3.975"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Network };
export default Network;
