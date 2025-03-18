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
        d="M5.034 11.117A4.002 4.002 0 0 0 6 19h11a5 5 0 1 0-1.17-9.862L14.5 9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M15.83 9.138a5.5 5.5 0 0 0-10.796 1.98S5.187 12 5.5 12.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Cloud";

export const Cloud: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
