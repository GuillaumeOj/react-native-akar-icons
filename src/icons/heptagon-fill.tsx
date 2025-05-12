import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const HeptagonFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M11.114 1.438a2 2 0 0 1 1.772 0l7.077 3.495a2 2 0 0 1 1.066 1.359l1.767 7.937a2 2 0 0 1-.374 1.662l-4.926 6.337a2 2 0 0 1-1.579.772H8.083a2 2 0 0 1-1.579-.772L1.578 15.89a2 2 0 0 1-.374-1.662l1.767-7.937a2 2 0 0 1 1.066-1.359z"
        />
      </Svg>
    );
  },
);

export { HeptagonFill };
export default HeptagonFill;
