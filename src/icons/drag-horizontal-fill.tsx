import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
      <Path
        fill={color}
        d="M22 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "DragHorizontalFill";

export const DragHorizontalFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
