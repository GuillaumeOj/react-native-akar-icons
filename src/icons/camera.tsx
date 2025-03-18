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
        d="m6.233 5.834.445-2.226A2 2 0 0 1 8.64 2h6.72a2 2 0 0 1 1.962 1.608l.445 2.226a1.88 1.88 0 0 0 1.387 1.454A3.76 3.76 0 0 1 22 10.934V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.066a3.76 3.76 0 0 1 2.846-3.646 1.88 1.88 0 0 0 1.387-1.454"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <_Circle
        cx="12"
        cy="14"
        r="4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M11 6h2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Camera";

export const Camera: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
