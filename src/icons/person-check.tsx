import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const PersonCheck: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <_Circle
          cx="12"
          cy="7"
          r="5"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7M17 16.5l1.5 1.5 2.5-3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { PersonCheck };
export default PersonCheck;
