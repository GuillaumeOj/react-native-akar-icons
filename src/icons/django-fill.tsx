import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const DjangoFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M15.172 0h-4.176v5.932c-.623-.15-1.14-.2-1.816-.2C4.816 5.731 2 8.305 2 12.273c0 4.118 2.655 6.263 7.755 6.268 1.703 0 3.278-.15 5.417-.53zM9.734 8.977c.516 0 .92.05 1.408.2v6.248c-.596.075-.972.1-1.434.1-2.14 0-3.305-1.142-3.305-3.21 0-2.125 1.22-3.338 3.331-3.338"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <Path
          fill={color}
          d="M22 15.233V6.215h-4.17v7.675c0 3.387-.188 4.674-.785 5.786-.57 1.087-1.462 1.8-3.305 2.606L17.615 24c1.843-.862 2.735-1.643 3.412-2.88.726-1.288.973-2.782.973-5.887M21.585 0h-4.176v3.993h4.176z"
        />
      </Svg>
    );
  },
);

export { DjangoFill };
export default DjangoFill;
