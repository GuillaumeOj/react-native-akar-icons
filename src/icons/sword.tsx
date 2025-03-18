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
        d="m18 3 4-1-1 4-10 10-2.5-.5L8 13zM2 20l2 2M5 14l1 4 4 1M6 18l-3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Sword";

export const Sword: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
