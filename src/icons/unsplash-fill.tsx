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
        d="M8.25 2h7.5v5.625h-7.5zM2 10.75h6.268v5.675h7.517V10.75H22V22H2z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "UnsplashFill";

export const UnsplashFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
