import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const CheckBoxFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm8.73 8.684a1 1 0 1 0-1.46-1.368l-3.083 3.29-1.523-1.353a1 1 0 0 0-1.328 1.494l2.25 2a1 1 0 0 0 1.393-.063z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { CheckBoxFill };
export default CheckBoxFill;
