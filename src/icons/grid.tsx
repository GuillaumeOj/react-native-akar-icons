import { memo } from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Grid: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Rect
          width="7"
          height="7"
          x="3"
          y="3"
          stroke={color}
          rx="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Rect
          width="7"
          height="7"
          x="3"
          y="14"
          stroke={color}
          rx="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Rect
          width="7"
          height="7"
          x="14"
          y="3"
          stroke={color}
          rx="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Rect
          width="7"
          height="7"
          x="14"
          y="14"
          stroke={color}
          rx="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Grid };
export default Grid;
