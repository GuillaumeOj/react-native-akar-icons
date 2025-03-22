import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Svg, Circle as _Circle } from "react-native-svg";
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

IconComponent.displayName = "Circle";

export const Circle: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
