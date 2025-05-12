import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const SlackFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M9.066 1a2.2 2.2 0 1 0 .001 4.4h2.2V3.2a2.2 2.2 0 0 0-2.2-2.2m0 5.867H3.2a2.2 2.2 0 0 0 0 4.4h5.866a2.2 2.2 0 1 0 0-4.4M23 9.066a2.2 2.2 0 0 0-4.4 0v2.2h2.2a2.2 2.2 0 0 0 2.2-2.2m-5.867 0V3.2a2.2 2.2 0 0 0-4.4 0v5.866a2.2 2.2 0 1 0 4.4 0M14.933 23a2.2 2.2 0 1 0 0-4.4h-2.2v2.2c-.001 1.213.984 2.198 2.2 2.2m0-5.868H20.8a2.2 2.2 0 0 0 0-4.4h-5.866a2.2 2.2 0 0 0-.001 4.4M1 14.933a2.2 2.2 0 0 0 4.4 0v-2.2H3.2a2.2 2.2 0 0 0-2.2 2.2m5.867 0v5.866a2.2 2.2 0 0 0 4.4.001v-5.866a2.2 2.2 0 0 0-4.4-.001"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { SlackFill };
export default SlackFill;
