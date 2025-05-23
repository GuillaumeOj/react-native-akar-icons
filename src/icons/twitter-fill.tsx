import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const TwitterFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.23 13.23 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.65 4.65 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.7 4.7 0 0 1-2.104.08 4.66 4.66 0 0 0 4.352 3.234 9.35 9.35 0 0 1-5.786 1.995 10 10 0 0 1-1.112-.065 13.18 13.18 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254q0-.301-.014-.602a9.5 9.5 0 0 0 2.323-2.41z"
        />
      </Svg>
    );
  },
);

export { TwitterFill };
export default TwitterFill;
