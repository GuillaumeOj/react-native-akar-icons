import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Tetragon: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M3.575 13.388a1.96 1.96 0 0 1 0-2.776l7.037-7.037a1.96 1.96 0 0 1 2.776 0l7.037 7.037a1.963 1.963 0 0 1 0 2.776l-7.037 7.037a1.963 1.963 0 0 1-2.776 0z"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Tetragon };
export default Tetragon;
