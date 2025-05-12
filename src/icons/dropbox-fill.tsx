import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const DropboxFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="m6 2 6 3.75L6 9.5 0 5.75zm12 0 6 3.75-6 3.75-6-3.75zM0 13.25 6 9.5l6 3.75L6 17zM18 9.5l6 3.75L18 17l-6-3.75zM6 18.25l6-3.75 6 3.75L12 22z"
        />
      </Svg>
    );
  },
);

export { DropboxFill };
export default DropboxFill;
