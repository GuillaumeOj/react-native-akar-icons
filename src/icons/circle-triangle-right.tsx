import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Circle as _Circle, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Path
        stroke={color}
        d="m16 12-6-4v8z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "CircleTriangleRight";

export const CircleTriangleRight: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
