import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const CircleTriangleRightFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m-2 7.8c0-.295.152-.566.396-.705a.71.71 0 0 1 .77.04l4.5 3.2A.82.82 0 0 1 16 12a.82.82 0 0 1-.334.666l-4.5 3.2a.71.71 0 0 1-.77.04A.81.81 0 0 1 10 15.2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { CircleTriangleRightFill };
export default CircleTriangleRightFill;
