import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Circle as _Circle, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M5 19 19 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <_Circle
        cx="7"
        cy="7"
        r="3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <_Circle
        cx="17"
        cy="17"
        r="3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Percentage";

export const Percentage: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
