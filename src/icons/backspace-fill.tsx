import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const BackspaceFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M6.6 4.2A3 3 0 0 1 9 3h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9a3 3 0 0 1-2.4-1.2l-4.5-6a3 3 0 0 1 0-3.6zm11.107 5.507a1 1 0 0 0-1.414-1.414L14 10.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L12.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414L14 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L15.414 12z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { BackspaceFill };
export default BackspaceFill;
