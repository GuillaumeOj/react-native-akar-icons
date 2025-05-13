import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const CirclePlus: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M12 8v4m0 0v4m0-4h4m-4 0H8"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <_Circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { CirclePlus };
export default CirclePlus;
