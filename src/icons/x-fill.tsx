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
        d="M13.808 10.469 20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5zm-2.296 2.748-.752-1.107L4.78 3.3h2.575l4.826 7.11.751 1.107 6.273 9.242h-2.574z"
      />
    </Svg>
  );
};

IconComponent.displayName = "XFill";

export const XFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
