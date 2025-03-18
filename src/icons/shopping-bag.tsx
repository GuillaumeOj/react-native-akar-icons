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
        d="M3.977 9.84A2 2 0 0 1 5.971 8h12.058a2 2 0 0 1 1.994 1.84l.803 10A2 2 0 0 1 18.833 22H5.167a2 2 0 0 1-1.993-2.16z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M16 11V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "ShoppingBag";

export const ShoppingBag: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
