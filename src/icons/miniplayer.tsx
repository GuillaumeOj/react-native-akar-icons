import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Rect, Svg } from "react-native-svg";
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
      <Rect
        width="20"
        height="16"
        x="2"
        y="4"
        stroke={color}
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        width="9"
        height="7"
        x="13"
        y="13"
        stroke={color}
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Miniplayer";

export const Miniplayer: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
