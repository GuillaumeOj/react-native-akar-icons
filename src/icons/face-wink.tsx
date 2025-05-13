import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const FaceWink: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <_Circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M7 9h2M16 9.05v-.1"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M16 15c-.5 1-1.79 2-4 2s-3.5-1-4-2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { FaceWink };
export default FaceWink;
