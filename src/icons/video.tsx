import { memo } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Video: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Rect
          width="20"
          height="16"
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
          d="m15 12-5-3v6z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Video };
export default Video;
