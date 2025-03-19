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
        d="M12 13c6 0 8-4.477 8-10H4c0 5.523 2 10 8 10M12 13v7M5 8h14M8 22h8l-4-2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "WineGlass";

export const WineGlass: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
