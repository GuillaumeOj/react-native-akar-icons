import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        fill={color}
        d="M16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M16 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4M16 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "DragVerticalFill";

export const DragVerticalFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
