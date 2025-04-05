import React from "react";
import { Ellipse, Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Globe = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <_Circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Ellipse
        cx="12"
        cy="12"
        stroke={color}
        rx="10"
        ry="4"
        transform="rotate(90 12 12)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M2 12h20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Globe };
export default Globe;
