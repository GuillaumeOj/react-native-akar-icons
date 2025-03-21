import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" />
      <Path
        stroke={color}
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c2.252 0 4.33-.744 6.001-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M16 8v4c0 1 .6 3 3 3s3-2 3-3"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Mention";

export const Mention: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
