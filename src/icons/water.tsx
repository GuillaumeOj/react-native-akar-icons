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
        d="M12 22a8 8 0 0 1-8-8c0-3.502 2.71-6.303 5.093-8.87L12 2l2.907 3.13C17.29 7.698 20 10.499 20 14a8 8 0 0 1-8 8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Water";

export const Water: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
