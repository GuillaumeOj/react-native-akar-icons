import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const ShareBox: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M12 3v12m0-12L8 7m4-4 4 4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.876999999999999a2 2 0 0 0 1.94-1.515L22 17"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { ShareBox };
export default ShareBox;
