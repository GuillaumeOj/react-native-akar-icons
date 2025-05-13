import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const TriangleDownFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M6 8a1 1 0 0 0-.8 1.6l6 8a1 1 0 0 0 1.6 0l6-8A1 1 0 0 0 18 8z"
        />
      </Svg>
    );
  },
);

export { TriangleDownFill };
export default TriangleDownFill;
