import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Triangle: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M10.293 4.793c.78-1.277 2.634-1.277 3.414 0l7.433 12.164C21.955 18.29 20.996 20 19.434 20H4.566c-1.562 0-2.52-1.71-1.706-3.043z"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Triangle };
export default Triangle;
