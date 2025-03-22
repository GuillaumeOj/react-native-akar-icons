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
        d="M8.252 18.459C7.462 19.764 7.107 21 5.7 21 4.209 21 3 19.757 3 18.223s1.209-2.778 2.7-2.778c1.4 0 2.55 1.095 2.686 2.498a.85.85 0 0 1-.134.515m0 0 1.948-3.476m5.548 3.476C16.538 19.764 16.893 21 18.3 21c1.491 0 2.7-1.243 2.7-2.777s-1.209-2.778-2.7-2.778c-1.4 0-2.55 1.095-2.687 2.498-.017.182.04.36.135.515m0 0L7.093 3.346a.66.66 0 0 0-1.1-.081c-1.704 2.19-1.534 5.35.395 7.333zm-3.797-6.63 4.953-8.494a.66.66 0 0 1 1.098-.076c1.707 2.194 1.537 5.358-.395 7.345L16.5 11.742"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Scissor";

export const Scissor: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
