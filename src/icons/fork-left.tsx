import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const ForkLeft = React.memo((props: IconProps) => {
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
        d="M15 3v18m0-18-4 4m4-4 4 4M8 10l-4 4 4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M15 21a7 7 0 0 0-7-7H4"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { ForkLeft };
export default ForkLeft;
