import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
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
        d="m7 21 6-8 8 8M5.228 7.303l13.532-5.06a1 1 0 0 1 1.108.285l.19.22A8 8 0 0 1 22 7.973v.616a1 1 0 0 1-.65.937l-13.536 5.06z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M2.66 11.371a2 2 0 0 1 1.193-2.545l1.694-.624 1.944 5.473-1.64.612a2 2 0 0 1-2.585-1.205zM13 13v9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Telescope";

export const Telescope: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
