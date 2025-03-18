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
        d="M10 22h4M5 9a7 7 0 0 1 14 0 6.97 6.97 0 0 1-3 5.734l-.542 2.566a2 2 0 0 1-1.977 1.7h-2.962a2 2 0 0 1-1.977-1.7L8 14.745A6.99 6.99 0 0 1 5 9M8 15h8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "LightBulb";

export const LightBulb: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
