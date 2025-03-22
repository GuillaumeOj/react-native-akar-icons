import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
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
      <Path
        stroke={color}
        d="M19 3v4m0 14V11m-7-8v12m0 6v-2M5 3v2m0 16V9"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="19"
        cy="9"
        r="2"
        stroke={color}
        transform="rotate(90 19 9)"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="12"
        cy="17"
        r="2"
        stroke={color}
        transform="rotate(90 12 17)"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="5"
        cy="7"
        r="2"
        stroke={color}
        transform="rotate(90 5 7)"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "SettingsVertical";

export const SettingsVertical: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
