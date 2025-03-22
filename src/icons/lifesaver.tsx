import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import {
  ClipPath,
  Defs,
  G,
  Path,
  Svg,
  Circle as _Circle,
} from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <G
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        clipPath="url(#a)"
      >
        <_Circle
          cx="12"
          cy="12"
          r="10"
          transform="rotate(45 12 12)"
          strokeLinecap="round"
        />
        <_Circle
          cx="12"
          cy="12"
          r="4"
          transform="rotate(45 12 12)"
          strokeLinecap="round"
        />
        <Path d="m19.071 4.929-4.243 4.243M9.172 14.828l-4.243 4.243M19.071 19.071l-4.243-4.243M9.172 9.172 4.929 4.929" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconComponent.displayName = "Lifesaver";

export const Lifesaver: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
