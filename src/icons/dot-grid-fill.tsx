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
        d="M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0M4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0m6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0m6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "DotGridFill";

export const DotGridFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
