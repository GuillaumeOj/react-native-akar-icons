import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const CssFill = React.memo((props: IconProps) => {
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
        fill={color}
        d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zM10.595 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zM13.69 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z"
      />
      <Path
        fill={color}
        d="m11.991 24-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76-2.374.642h-.002l-2.37-.64-.152-1.697H7.333l.298 3.342 4.36 1.21 4.367-1.21.532-5.964.052-.571.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
});

export { CssFill };
export default CssFill;
