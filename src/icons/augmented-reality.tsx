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
        d="M10.971 6.617a2 2 0 0 1 2.058 0l3.486 2.092a1 1 0 0 1 .485.857v4.302a2 2 0 0 1-.971 1.715l-3 1.8a2 2 0 0 1-2.058 0l-3-1.8A2 2 0 0 1 7 13.868V9.566a1 1 0 0 1 .486-.857z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="m7 9 5 2.759m0 0L17 9m-5 2.759V17"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M6 2H4a2 2 0 0 0-2 2v2M18 22h2a2 2 0 0 0 2-2v-2M22 6V4a2 2 0 0 0-2-2h-2M2 18v2a2 2 0 0 0 2 2h2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "AugmentedReality";

export const AugmentedReality: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
