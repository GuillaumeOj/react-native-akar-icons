import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Rect
        width="12"
        height="20"
        x="6"
        y="2"
        stroke={color}
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M11.95 18h.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "MobileDevice";

export const MobileDevice: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
