import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle
        cx="12"
        cy="12"
        r="8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M8.399 4.849C5.372 2.582 2.972 1.489 2.23 2.23c-1.174 1.174 2.248 6.5 7.643 11.895 5.396 5.395 10.722 8.817 11.895 7.643.431-.43.243-1.421-.435-2.769"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Planet";

export const Planet: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
