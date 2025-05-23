import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const AirplayAudio: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="m12 16 6 5H6z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M4 18a9.96 9.96 0 0 1-2-6C2 6.477 6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2 6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M17.123 15.125a6 6 0 1 0-10.247-.002"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M14 12a2 2 0 1 0-4 0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { AirplayAudio };
export default AirplayAudio;
