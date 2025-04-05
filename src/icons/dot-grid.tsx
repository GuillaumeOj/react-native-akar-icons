import React from "react";
import { Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const DotGrid = React.memo((props: IconProps) => {
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
        cx="4"
        cy="4"
        r="1"
        stroke={color}
        transform="rotate(90 4 4)"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="12"
        cy="4"
        r="1"
        stroke={color}
        transform="rotate(90 12 4)"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="20"
        cy="4"
        r="1"
        stroke={color}
        transform="rotate(90 20 4)"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="4"
        cy="12"
        r="1"
        stroke={color}
        transform="rotate(90 4 12)"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="12"
        cy="12"
        r="1"
        stroke={color}
        transform="rotate(90 12 12)"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="20"
        cy="12"
        r="1"
        stroke={color}
        transform="rotate(90 20 12)"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="4"
        cy="20"
        r="1"
        stroke={color}
        transform="rotate(90 4 20)"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="12"
        cy="20"
        r="1"
        stroke={color}
        transform="rotate(90 12 20)"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="20"
        cy="20"
        r="1"
        stroke={color}
        transform="rotate(90 20 20)"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { DotGrid };
export default DotGrid;
