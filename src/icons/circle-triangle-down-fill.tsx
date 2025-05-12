import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const CircleTriangleDownFill: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m-3.2 9a.81.81 0 0 0-.705.396.71.71 0 0 0 .04.77l3.2 4.5A.82.82 0 0 0 12 16a.82.82 0 0 0 .666-.334l3.2-4.5a.71.71 0 0 0 .04-.77A.81.81 0 0 0 15.2 10z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { CircleTriangleDownFill };
export default CircleTriangleDownFill;
