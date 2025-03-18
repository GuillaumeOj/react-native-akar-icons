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
        d="M11 8V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4M15 16V2h3a4 4 0 0 1 4 4v10h-4M15 16v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5M5 12v9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-9M5 6V2M8 6V2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Utensils";

export const Utensils: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
