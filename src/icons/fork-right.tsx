import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const ForkRight: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M9 3v18M9 3l4 4M9 3 5 7M16 10l4 4-4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M9 21a7 7 0 0 1 7-7h4"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { ForkRight };
export default ForkRight;
