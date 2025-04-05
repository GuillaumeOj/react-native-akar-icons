import React from "react";
import { Ellipse, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Oval = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Ellipse
        cx="12"
        cy="12"
        stroke={color}
        rx="8"
        ry="10"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Oval };
export default Oval;
