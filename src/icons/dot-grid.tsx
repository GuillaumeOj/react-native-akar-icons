import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Circle as _Circle, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
      <_Circle
        cx="4"
        cy="4"
        r="1"
        stroke={color}
        transform="rotate(90 4 4)"
        strokeWidth="2"
      />
      <_Circle
        cx="12"
        cy="4"
        r="1"
        stroke={color}
        transform="rotate(90 12 4)"
        strokeWidth="2"
      />
      <_Circle
        cx="20"
        cy="4"
        r="1"
        stroke={color}
        transform="rotate(90 20 4)"
        strokeWidth="2"
      />
      <_Circle
        cx="4"
        cy="12"
        r="1"
        stroke={color}
        transform="rotate(90 4 12)"
        strokeWidth="2"
      />
      <_Circle
        cx="12"
        cy="12"
        r="1"
        stroke={color}
        transform="rotate(90 12 12)"
        strokeWidth="2"
      />
      <_Circle
        cx="20"
        cy="12"
        r="1"
        stroke={color}
        transform="rotate(90 20 12)"
        strokeWidth="2"
      />
      <_Circle
        cx="4"
        cy="20"
        r="1"
        stroke={color}
        transform="rotate(90 4 20)"
        strokeWidth="2"
      />
      <_Circle
        cx="12"
        cy="20"
        r="1"
        stroke={color}
        transform="rotate(90 12 20)"
        strokeWidth="2"
      />
      <_Circle
        cx="20"
        cy="20"
        r="1"
        stroke={color}
        transform="rotate(90 20 20)"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "DotGrid";

export const DotGrid: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
