import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
      <Path fill={color} d="m12 1 12 21H0z" />
    </Svg>
  );
};

IconComponent.displayName = "VercelFill";

export const VercelFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
