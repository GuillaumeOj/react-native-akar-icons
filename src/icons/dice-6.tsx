import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Rect, Svg } from "react-native-svg";
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
        width="18"
        height="18"
        x="3"
        y="3"
        stroke={color}
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M8 8h.5M8.25 7.75v.5M8.25 11.75v.5M8.25 15.75v.5M15.5 8h.5M15.75 7.75v.5M15.75 11.75v.5M15.75 15.75v.5M8 12h.5M15.5 12h.5M8 16h.5M15.5 16h.5"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Dice_6";

export const Dice_6: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
