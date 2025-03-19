import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Rect
        width="20"
        height="18"
        x="2"
        y="3"
        stroke={color}
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path stroke={color} d="M9 3v18" strokeWidth="2" />
    </Svg>
  );
};

IconComponent.displayName = "PanelLeft";

export const PanelLeft: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
