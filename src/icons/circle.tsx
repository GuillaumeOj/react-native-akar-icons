import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    </Svg>
  );
};

IconComponent.displayName = "Circle";

export const Circle: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
