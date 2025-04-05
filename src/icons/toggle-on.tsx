import React from "react";
import { Rect, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const ToggleOn = React.memo((props: IconProps) => {
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
        width="20"
        height="10"
        x="2"
        y="7"
        stroke={color}
        rx="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="17"
        cy="12"
        r="5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { ToggleOn };
export default ToggleOn;
