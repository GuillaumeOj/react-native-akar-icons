import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        fill={color}
        d="M2 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M18 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "MoreHorizontalFill";

export const MoreHorizontalFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
