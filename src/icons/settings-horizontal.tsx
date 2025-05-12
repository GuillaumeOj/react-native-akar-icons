import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const SettingsHorizontal: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <_Circle
          cx="9"
          cy="5"
          r="2"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <_Circle
          cx="17"
          cy="12"
          r="2"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <_Circle
          cx="7"
          cy="19"
          r="2"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { SettingsHorizontal };
export default SettingsHorizontal;
