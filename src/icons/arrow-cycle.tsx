import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M22 12c0 6-4.39 10-9.806 10C7.792 22 4.24 19.665 3 16M2 12C2 6 6.39 2 11.807 2 16.208 2 19.758 4.335 21 8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="m7 17-4-1-1 4M17 7l4 1 1-4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "ArrowCycle";

export const ArrowCycle: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
