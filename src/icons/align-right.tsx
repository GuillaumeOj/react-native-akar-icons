import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const AlignRight: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M22 3v18"
          strokeLinecap="round"
          strokeMiterlimit="5.759"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M2 6h16v4H2zM8 14h10v4H8z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="5.759"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { AlignRight };
export default AlignRight;
