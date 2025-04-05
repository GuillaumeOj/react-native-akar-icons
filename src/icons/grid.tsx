import React from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Grid = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Rect
        width="7"
        height="7"
        x="3"
        y="3"
        stroke={color}
        rx="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        width="7"
        height="7"
        x="3"
        y="14"
        stroke={color}
        rx="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        width="7"
        height="7"
        x="14"
        y="3"
        stroke={color}
        rx="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        width="7"
        height="7"
        x="14"
        y="14"
        stroke={color}
        rx="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Grid };
export default Grid;
