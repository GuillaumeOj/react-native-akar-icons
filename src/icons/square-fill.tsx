import React from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const SquareFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Rect width="20" height="20" x="2" y="2" fill={color} rx="2" />
      </Svg>
    );
  },
);

export { SquareFill };
export default SquareFill;
