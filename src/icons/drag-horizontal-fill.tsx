import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const DragHorizontalFill: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M22 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { DragHorizontalFill };
export default DragHorizontalFill;
