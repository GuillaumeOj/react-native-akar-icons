import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Rect
        width="18"
        height="12"
        x="3"
        y="7"
        stroke={color}
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H9zM10 12l.211.106a4 4 0 0 0 3.578 0L14 12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Briefcase";

export const Briefcase: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
