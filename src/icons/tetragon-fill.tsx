import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const TetragonFill: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M10.61 2.576a1.966 1.966 0 0 1 2.78 0l8.034 8.034a1.966 1.966 0 0 1 0 2.78l-8.034 8.034a1.966 1.966 0 0 1-2.78 0L2.576 13.39a1.966 1.966 0 0 1 0-2.78z"
        />
      </Svg>
    );
  },
);

export { TetragonFill };
export default TetragonFill;
