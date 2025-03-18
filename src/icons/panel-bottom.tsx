import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
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
      <Path stroke={color} d="M22 15H2" strokeWidth="2" />
    </Svg>
  );
};

IconComponent.displayName = "PanelBottom";

export const PanelBottom: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
