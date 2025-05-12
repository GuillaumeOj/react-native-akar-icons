import { memo } from "react";
import { Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const CircleFill: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <_Circle cx="12" cy="12" r="11" fill={color} />
      </Svg>
    );
  },
);

export { CircleFill };
export default CircleFill;
