import React from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Calendar: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Rect
          width="20"
          height="18"
          x="2"
          y="4"
          stroke={color}
          rx="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M8 2v4M16 2v4M2 10h20"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Calendar };
export default Calendar;
