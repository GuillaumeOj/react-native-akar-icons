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
        d="M20 16V8.5c0-.828-.641-1.5-1.48-1.5C18 7 17 7.3 17 8.5v-3c0-.828-.641-1.5-1.48-1.5-.507 0-1.52.3-1.52 1.5v-2c0-.828-.641-1.5-1.48-1.5-.84 0-1.52.672-1.52 1.5v2C11 4.3 10.007 4 9.5 4 8.66 4 8 4.691 8 5.52V14M11 5.5V11M14 5.5V11M17 5.5V11"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M20 16c0 4-3.134 6-7 6s-5.196-1-8.196-6l-1.571-2.605c-.536-.868-.107-1.994.881-2.314a1.66 1.66 0 0 1 1.818.552L8 14.033"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Hand";

export const Hand: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
