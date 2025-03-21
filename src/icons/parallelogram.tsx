import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M5.586 6.45A2 2 0 0 1 7.509 5h11.84a2 2 0 0 1 1.923 2.55l-2.858 10A2 2 0 0 1 16.491 19H4.651a2 2 0 0 1-1.923-2.55z"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Parallelogram";

export const Parallelogram: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
