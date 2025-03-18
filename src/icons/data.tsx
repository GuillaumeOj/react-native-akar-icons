import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Ellipse, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Ellipse
        cx="12"
        cy="6"
        stroke={color}
        rx="8"
        ry="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M6.037 12C4.77 12.53 4 13.232 4 14c0 1.657 3.582 3 8 3s8-1.343 8-3c0-.768-.77-1.47-2.037-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M4 6v4c0 1.657 3.582 3 8 3s8-1.343 8-3V6M4 14v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Data";

export const Data: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
