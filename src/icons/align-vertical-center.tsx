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
        d="M21 12H3"
        strokeLinecap="round"
        strokeMiterlimit="5.759"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M6 16v4h4v-4M14 16v2h4v-2M14 8V6h4v2M10 8V4H6v4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="5.759"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "AlignVerticalCenter";

export const AlignVerticalCenter: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
