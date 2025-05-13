import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Plus: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Plus };
export default Plus;
