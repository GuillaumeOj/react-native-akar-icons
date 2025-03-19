import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Rect
        width="18"
        height="18"
        x="3"
        y="3"
        stroke={color}
        rx="2"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Square";

export const Square: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
