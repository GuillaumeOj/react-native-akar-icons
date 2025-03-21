import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path stroke={color} d="M21 12H3" strokeLinecap="round" strokeWidth="2" />
      <Path
        stroke={color}
        d="M12 2v6M12 22v-6M9 5l3 3 3-3M9 19l3-3 3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "AlignToMiddle";

export const AlignToMiddle: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
