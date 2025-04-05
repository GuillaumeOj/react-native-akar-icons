import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const FaceNeutral = React.memo((props: IconProps) => {
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
        d="M8 9.05v-.1M16 9.05v-.1M8 14h8"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { FaceNeutral };
export default FaceNeutral;
