import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const VrAr: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3.868a2 2 0 0 1-1.715-.971l-1.56-2.6a1 1 0 0 0-1.714 0l-1.56 2.6A2 2 0 0 1 7.868 19H4a2 2 0 0 1-2-2zM3.813 6.781A4 4 0 0 1 7.14 5h9.718a4 4 0 0 1 3.328 1.781L21 8H3z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { VrAr };
export default VrAr;
