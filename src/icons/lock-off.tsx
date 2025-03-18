import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Rect
        width="18"
        height="12"
        x="3"
        y="10"
        stroke={color}
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M6 10V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "LockOff";

export const LockOff: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
