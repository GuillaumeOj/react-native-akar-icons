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
        d="M12 22V7M5 14l7-7 7 7M3 2h18"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "AlignToTop";

export const AlignToTop: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
