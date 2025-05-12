import { memo } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const MobileDevice: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Rect
          width="12"
          height="20"
          x="6"
          y="2"
          stroke={color}
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M11.95 18h.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { MobileDevice };
export default MobileDevice;
