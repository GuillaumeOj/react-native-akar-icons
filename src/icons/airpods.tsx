import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Airpods = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        stroke={color}
        d="M14 7c0 2.21 1.644 4 4 4s4-1.79 4-4-1.644-4-4-4-4 1.79-4 4ZM10 7c0 2.21-1.644 4-4 4S2 9.21 2 7s1.644-4 4-4 4 1.79 4 4Z"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M14 7v12a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-8"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <Path stroke={color} d="M14 17h4M6 17h4" strokeWidth={strokeWidth} />
      <Path
        stroke={color}
        d="M10 7v12a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-8"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M20 4a5.41 5.41 0 0 0 0 6M4 4a5.41 5.41 0 0 1 0 6"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Airpods };
export default Airpods;
