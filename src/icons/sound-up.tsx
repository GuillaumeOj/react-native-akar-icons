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
        d="M19 9v3m0 0v3m0-3h3m-3 0h-3"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M2 14.959V9.04C2 8.466 2.448 8 3 8h3.586a.98.98 0 0 0 .707-.305l3-3.388c.63-.656 1.707-.191 1.707.736v13.914c0 .934-1.09 1.395-1.716.726l-2.99-3.369A.98.98 0 0 0 6.578 16H3c-.552 0-1-.466-1-1.041"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "SoundUp";

export const SoundUp: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
