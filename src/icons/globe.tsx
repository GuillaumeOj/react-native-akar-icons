import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Circle as _Circle, Ellipse, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Ellipse
        cx="12"
        cy="12"
        stroke={color}
        rx="10"
        ry="4"
        transform="rotate(90 12 12)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M2 12h20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Globe";

export const Globe: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
