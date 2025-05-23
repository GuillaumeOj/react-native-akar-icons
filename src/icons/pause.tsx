import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Pause: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M7 5v14M17 5v14"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Pause };
export default Pause;
