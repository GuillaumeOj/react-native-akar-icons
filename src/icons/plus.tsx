import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Plus = React.memo((props: IconProps) => {
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
        d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Plus };
export default Plus;
