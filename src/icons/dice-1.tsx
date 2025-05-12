import React from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Dice_1: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Rect
          width="18"
          height="18"
          x="3"
          y="3"
          stroke={color}
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M12.25 11.75v.5M12 12h.5"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Dice_1 };
export default Dice_1;
