import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Ellipse, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Ellipse cx="12" cy="12" stroke={color} rx="8" ry="10" strokeWidth="2" />
    </Svg>
  );
};

IconComponent.displayName = "Oval";

export const Oval: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
