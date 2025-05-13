import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const AlignToMiddle: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M21 12H3"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M12 2v6M12 22v-6M9 5l3 3 3-3M9 19l3-3 3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { AlignToMiddle };
export default AlignToMiddle;
