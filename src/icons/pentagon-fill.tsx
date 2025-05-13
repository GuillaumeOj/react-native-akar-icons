import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const PentagonFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M10.126 2.219a3 3 0 0 1 3.748 0l7.63 6.104a3 3 0 0 1 .945 3.367l-3.03 8.335A3 3 0 0 1 16.599 22H7.401a3 3 0 0 1-2.82-1.975l-3.03-8.334a3 3 0 0 1 .945-3.368z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { PentagonFill };
export default PentagonFill;
