import { memo } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const PanelRight: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Rect
          width="20"
          height="18"
          x="2"
          y="3"
          stroke={color}
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path stroke={color} d="M15 3v18" strokeWidth={strokeWidth} />
      </Svg>
    );
  },
);

export { PanelRight };
export default PanelRight;
