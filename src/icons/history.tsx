import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const History: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M4.266 16.06a8.92 8.92 0 0 0 3.915 3.978 8.7 8.7 0 0 0 5.471.832 8.8 8.8 0 0 0 4.887-2.64 9.07 9.07 0 0 0 2.388-5.079 9.14 9.14 0 0 0-1.044-5.53 8.9 8.9 0 0 0-4.069-3.815 8.7 8.7 0 0 0-5.5-.608c-1.85.401-3.366 1.313-4.62 2.755-.151.16-.735.806-1.22 1.781M7.5 8l-3.609.72L3 5m9 4v4l3 2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { History };
export default History;
