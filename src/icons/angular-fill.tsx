import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const AngularFill: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path fill={color} d="M10.174 12.594h3.652L12 8.095z" />
        <Path
          fill={color}
          d="M12 1 2 4.652l1.525 13.541L12 23l8.475-4.807L22 4.652zm6.24 16.786h-2.33l-1.257-3.212H9.347L8.09 17.786H5.76L12 3.431z"
        />
      </Svg>
    );
  },
);

export { AngularFill };
export default AngularFill;
