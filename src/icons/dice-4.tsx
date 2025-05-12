import { memo } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Dice_4: IconType = memo(
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
          d="M8 8h.5M15.5 8h.5M8 16h.5M15.5 16h.5M8.25 7.75v.5M8.25 15.75v.5M15.75 7.75v.5M15.75 15.75v.5"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Dice_4 };
export default Dice_4;
