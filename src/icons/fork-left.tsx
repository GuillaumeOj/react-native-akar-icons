import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const ForkLeft: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M15 3v18m0-18-4 4m4-4 4 4M8 10l-4 4 4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M15 21a7 7 0 0 0-7-7H4"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { ForkLeft };
export default ForkLeft;
