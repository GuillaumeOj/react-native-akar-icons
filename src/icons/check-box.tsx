import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Rect
        width="18"
        height="18"
        x="3"
        y="3"
        stroke={color}
        rx="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="m9 12 2.25 2L15 10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "CheckBox";

export const CheckBox: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
