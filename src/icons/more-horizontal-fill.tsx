import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const MoreHorizontalFill = React.memo((props: IconProps) => {
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
        fill={color}
        d="M2 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M18 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
});

export { MoreHorizontalFill };
export default MoreHorizontalFill;
