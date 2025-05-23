import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const MusicAlbum: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M9 16.5V8.78a1 1 0 0 1 .757-.97l6-1.5A1 1 0 0 1 17 7.28V15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path stroke={color} d="m9 11 8-2" strokeWidth={strokeWidth} />
        <_Circle
          cx="7.5"
          cy="16.5"
          r="1.5"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <_Circle
          cx="15.5"
          cy="15.5"
          r="1.5"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { MusicAlbum };
export default MusicAlbum;
