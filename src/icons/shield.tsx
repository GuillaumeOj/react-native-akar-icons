import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Shield: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="m13.147 21.197 1.67-1.168a13.39 13.39 0 0 0 5.447-13.624.84.84 0 0 0-.453-.586L12 2 4.19 5.819a.84.84 0 0 0-.454.586 13.39 13.39 0 0 0 5.448 13.624l1.67 1.168a2 2 0 0 0 2.293 0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Shield };
export default Shield;
