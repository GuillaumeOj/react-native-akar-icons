import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Rect, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Rect
        width="20"
        height="10"
        x="2"
        y="7"
        stroke={color}
        rx="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <_Circle
        cx="17"
        cy="12"
        r="5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "ToggleOn";

export const ToggleOn: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
