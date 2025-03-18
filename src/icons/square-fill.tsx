import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Rect width="20" height="20" x="2" y="2" fill={color} rx="2" />
    </Svg>
  );
};

IconComponent.displayName = "SquareFill";

export const SquareFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
