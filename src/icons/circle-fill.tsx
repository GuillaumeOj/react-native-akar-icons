import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Circle as _Circle, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle cx="12" cy="12" r="11" fill={color} />
    </Svg>
  );
};

IconComponent.displayName = "CircleFill";

export const CircleFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
