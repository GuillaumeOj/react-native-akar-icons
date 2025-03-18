import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M10.75 3a2 2 0 0 1 2.5 0l7.63 6.103a2 2 0 0 1 .63 2.246l-3.031 8.334A2 2 0 0 1 16.599 21H7.401a2 2 0 0 1-1.88-1.317l-3.03-8.334a2 2 0 0 1 .63-2.246z"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Pentagon";

export const Pentagon: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
