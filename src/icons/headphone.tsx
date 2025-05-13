import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Headphone: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M2 13.565C2 11.512 4 11 6 11v9a4 4 0 0 1-4-4zM22 13.565C22 11.512 20 11 18 11v9a4 4 0 0 0 4-4zM6 20V10a6 6 0 1 1 12 0v10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Headphone };
export default Headphone;
