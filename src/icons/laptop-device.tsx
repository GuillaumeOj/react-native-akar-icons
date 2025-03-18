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
        d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9H4zM2 19h20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "LaptopDevice";

export const LaptopDevice: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
