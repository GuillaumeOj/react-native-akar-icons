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
        stroke={color}
        d="M9.3 17.85a3.15 3.15 0 1 1-3.15-3.15h11.7a3.15 3.15 0 1 1-3.15 3.15V6.15a3.15 3.15 0 1 1 3.15 3.15H6.15A3.15 3.15 0 1 1 9.3 6.15z"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Command";

export const Command: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
