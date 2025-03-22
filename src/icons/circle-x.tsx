import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
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
        d="M15 15 9 9m6 0-6 6"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "CircleX";

export const CircleX: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
