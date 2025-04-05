import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Plane = React.memo((props: IconProps) => {
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
        d="m4 11-2 4 3.408 1.363a4 4 0 0 1 2.229 2.229L9 22l4-2-1.21-2.42a2 2 0 0 1 .679-2.56L14 14l4 7 3-4-2.29-7.469.715-.714c1.412-1.412 2.71-3.682 1.075-5.317s-3.91-.34-5.316 1.077l-.72.708L7 3 3 6l7 4-1.02 1.531a2 2 0 0 1-2.56.68z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Plane };
export default Plane;
