import React from "react";
import { Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const CircleFill = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <_Circle cx="12" cy="12" r="11" fill={color} />
    </Svg>
  );
});

export { CircleFill };
export default CircleFill;
