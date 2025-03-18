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
        d="M10 17h6V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a1 1 0 0 0 1 1h1M22 16v-4a4 4 0 0 0-4-4h-2v9h5a1 1 0 0 0 1-1M15 17a3 3 0 1 0 6 0zM22 14h-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <_Circle
        cx="7"
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

IconComponent.displayName = "Truck";

export const Truck: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
