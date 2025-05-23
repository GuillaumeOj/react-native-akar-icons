import React from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const BatteryCharging: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Rect
          width="18"
          height="12"
          x="2"
          y="6"
          stroke={color}
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M20 10h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H20zM11.4 9 9 12h4l-2.4 3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { BatteryCharging };
export default BatteryCharging;
