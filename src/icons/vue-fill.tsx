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
        d="M19.114 2H15l-3 4.9L9.429 2H0l12 21L24 2zM3 3.75h2.914L12 14.6l6.086-10.85H21L12 19.5z"
      />
    </Svg>
  );
};

IconComponent.displayName = "VueFill";

export const VueFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
