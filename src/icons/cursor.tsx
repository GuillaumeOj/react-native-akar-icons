import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="m3 3 7 19 2.051-6.154a6 6 0 0 1 3.795-3.795L22 10z"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Cursor";

export const Cursor: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
