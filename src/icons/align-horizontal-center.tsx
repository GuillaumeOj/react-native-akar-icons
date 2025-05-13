import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const AlignHorizontalCenter: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M12 3v18"
          strokeLinecap="round"
          strokeMiterlimit="5.759"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M16 6h4v4h-4M8 10H4V6h4M16 14h2v4h-2M8 14H6v4h2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="5.759"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { AlignHorizontalCenter };
export default AlignHorizontalCenter;
