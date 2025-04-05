import React from "react";
import { Ellipse, Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const TrashBin = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        stroke={color}
        d="m3 4 2.303 14.077a4 4 0 0 0 2.738 3.166l.328.104a12 12 0 0 0 7.262 0l.328-.104a4 4 0 0 0 2.738-3.166L21 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Ellipse
        cx="12"
        cy="4"
        stroke={color}
        rx="9"
        ry="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { TrashBin };
export default TrashBin;
