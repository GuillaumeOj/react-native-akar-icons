import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const AlignVerticalCenter: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M21 12H3"
          strokeLinecap="round"
          strokeMiterlimit="5.759"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M6 16v4h4v-4M14 16v2h4v-2M14 8V6h4v2M10 8V4H6v4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="5.759"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { AlignVerticalCenter };
export default AlignVerticalCenter;
