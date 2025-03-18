import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Circle as _Circle, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle cx="12" cy="7" r="5" stroke={color} strokeWidth="2" />
      <Path
        stroke={color}
        d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="m21 18-3-3m3 0-3 3"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "PersonCross";

export const PersonCross: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
