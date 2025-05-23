import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Coffee: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M11 7c4.418 0 8 .895 8 2s-3.582 2-8 2-8-.895-8-2c0-.357.375-.693 1.033-.984"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M3 9v9.343c0 1.061.44 2.08 1.409 2.513C5.624 21.399 7.711 22 11 22s5.377-.601 6.591-1.144c.968-.433 1.409-1.452 1.409-2.513V9M19 10a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3v0M7 3v4M11 2v2M15 4v3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Coffee };
export default Coffee;
