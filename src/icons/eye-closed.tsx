import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const EyeClosed: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M2 10s3.5 4 10 4 10-4 10-4M4 11.645 2 14M22 14l-1.996-2.352M8.914 13.68 8 16.5M15.063 13.688 16 16.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { EyeClosed };
export default EyeClosed;
