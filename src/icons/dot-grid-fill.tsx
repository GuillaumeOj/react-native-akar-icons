import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const DotGridFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0M4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0m6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0m6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { DotGridFill };
export default DotGridFill;
