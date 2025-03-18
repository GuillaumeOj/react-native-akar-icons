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
        d="M22 3v18"
        strokeLinecap="round"
        strokeMiterlimit="5.759"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M2 6h16v4H2zM8 14h10v4H8z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="5.759"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "AlignRight";

export const AlignRight: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
