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
        d="M3 6h18M7 12h10M5 18h14"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "TextAlignCenter";

export const TextAlignCenter: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
