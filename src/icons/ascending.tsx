import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Ascending: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M6 3v18M6 3l3 3.333M6 3 3 6.333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M14 21h8l-1-4h-7zM14 14h6l-1-4h-5zM14 7h4l-1-4h-3z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="5.759"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Ascending };
export default Ascending;
