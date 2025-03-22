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
        d="M12 2a6 6 0 0 0-6 6c0 1.419.302 2.348 1.125 3.375L12 17l4.875-5.625C17.698 10.348 18 9.419 18 8a6 6 0 0 0-6-6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M5 15.143C3.149 15.87 2 16.881 2 18c0 2.21 4.477 4 10 4s10-1.79 10-4c0-1.119-1.149-2.13-3-2.857"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="12"
        cy="8"
        r="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "CheckIn";

export const CheckIn: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
