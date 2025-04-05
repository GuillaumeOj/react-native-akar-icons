import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Inbox = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        stroke={color}
        d="M3.304 6.132A4 4 0 0 1 7.209 3h9.582a4 4 0 0 1 3.905 3.132l.147.662a24 24 0 0 1 0 10.412l-.147.662A4 4 0 0 1 16.791 21H7.21a4 4 0 0 1-3.905-3.132l-.147-.662a24 24 0 0 1 0-10.412z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M2.5 13h6.338c0 1 .973 3 3.405 3s3.406-2 3.406-3H21.5"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Inbox };
export default Inbox;
