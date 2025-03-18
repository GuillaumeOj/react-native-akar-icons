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
        d="m19 16 .87-11.735a2.102 2.102 0 0 0-4.181-.433L15 9M8 15v-3a2 2 0 1 0-4 0v4M12 13v-1.5a2 2 0 1 0-4 0V15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M16 13v-2a2 2 0 1 0-4 0v2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M19 16c-.536 4-3.358 6-7.5 6S4 20 4 16"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M13.692 17H11a2 2 0 1 1 0-4h4c2.21 0 4.5 2 3.5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "PointingUp";

export const PointingUp: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
