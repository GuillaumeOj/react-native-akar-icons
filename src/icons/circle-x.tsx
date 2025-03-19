import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Circle as _Circle, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M15 15 9 9m6 0-6 6"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <_Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    </Svg>
  );
};

IconComponent.displayName = "CircleX";

export const CircleX: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
