import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Plant: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M11.964 6.97s-3.075.306-4.685-1.035C5.669 4.593 6.036 2.03 6.036 2.03s3.075-.306 4.686 1.035c1.61 1.342 1.242 3.905 1.242 3.905"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M12.036 6.97s3.075.306 4.685-1.035c1.61-1.342 1.243-3.905 1.243-3.905s-3.075-.306-4.685 1.035c-1.61 1.342-1.243 3.905-1.243 3.905M4 11a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM5 14h14l-2 8H7z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Plant };
export default Plant;
