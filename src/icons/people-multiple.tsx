import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle cx="7" cy="6" r="3" stroke={color} strokeWidth="2" />
      <Path
        stroke={color}
        d="M10 13H5.818a3 3 0 0 0-2.964 2.537L2.36 18.69A2 2 0 0 0 4.337 21H9M21.64 18.691l-.494-3.154A3 3 0 0 0 18.182 13h-2.364a3 3 0 0 0-2.964 2.537l-.493 3.154A2 2 0 0 0 14.337 21h5.326a2 2 0 0 0 1.976-2.309"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <_Circle cx="17" cy="6" r="3" stroke={color} strokeWidth="2" />
    </Svg>
  );
};

IconComponent.displayName = "PeopleMultiple";

export const PeopleMultiple: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
