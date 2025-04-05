import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const FaceSad = React.memo((props: IconProps) => {
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
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M8 9.05v-.1M16 9.05v-.1"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M16 16c-.5-1.5-1.79-3-4-3s-3.5 1.5-4 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { FaceSad };
export default FaceSad;
