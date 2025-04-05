import React from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Square = React.memo((props: IconProps) => {
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
        width="18"
        height="18"
        x="3"
        y="3"
        stroke={color}
        rx="2"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Square };
export default Square;
