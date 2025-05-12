import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const AlignLeft: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M2 3v18"
          strokeLinecap="round"
          strokeMiterlimit="5.759"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M6 6h16v4H6zM6 14h10v4H6z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="5.759"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { AlignLeft };
export default AlignLeft;
