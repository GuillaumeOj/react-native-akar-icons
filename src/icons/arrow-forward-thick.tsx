import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
      <Path
        stroke={color}
        d="m22 11-7-9v5C3.047 7 1.668 16.678 2 22c.502-2.685.735-7 13-7v5z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "ArrowForwardThick";

export const ArrowForwardThick: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
