import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const PaperAirplane: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="m9.474 16 9.181 3.284a1.1 1.1 0 0 0 1.462-.887L21.99 4.239c.114-.862-.779-1.505-1.567-1.13L2.624 11.605c-.88.42-.814 1.69.106 2.017l2.44.868 1.33.467M13 17.26l-1.99 3.326c-.65.808-1.959.351-1.959-.683V17.24a2 2 0 0 1 .53-1.356l3.871-4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { PaperAirplane };
export default PaperAirplane;
