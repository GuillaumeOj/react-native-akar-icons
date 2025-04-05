import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const AlignBottom = React.memo((props: IconProps) => {
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
        d="M21 22H3"
        strokeLinecap="round"
        strokeMiterlimit="5.759"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M6 18V2h4v16zM14 18V8h4v10z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="5.759"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { AlignBottom };
export default AlignBottom;
