import React from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const SquareFill = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Rect width="20" height="20" x="2" y="2" fill={color} rx="2" />
    </Svg>
  );
});

export { SquareFill };
export default SquareFill;
