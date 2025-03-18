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
        d="M10 3 6 21M18 3l-4 18M4 8h17M3 16h17"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Hashtag";

export const Hashtag: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
