import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Path
        stroke={color}
        d="m12 8-4 6h8z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "CircleTriangleUp";

export const CircleTriangleUp: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
