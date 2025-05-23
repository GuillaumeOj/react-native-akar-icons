import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const PointerHand: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M20 16V9.5c0-.828-.641-1.5-1.48-1.5C18 8 17 8.3 17 9.5M8 14V5.52M20 16c0 4-3.134 6-7 6s-5.196-1-8.196-6l-1.571-2.605c-.536-.868-.107-1.994.881-2.314a1.66 1.66 0 0 1 1.818.552L8 14.033"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M14 11V7.5A1.5 1.5 0 0 1 15.5 6v0A1.5 1.5 0 0 1 17 7.5V11M11 11V6.5A1.5 1.5 0 0 1 12.5 5v0A1.5 1.5 0 0 1 14 6.5V11M8 11V2.5A1.5 1.5 0 0 1 9.5 1v0A1.5 1.5 0 0 1 11 2.5V11"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { PointerHand };
export default PointerHand;
