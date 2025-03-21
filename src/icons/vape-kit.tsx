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
        d="M3 10a1 1 0 0 1 1-1h6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM13 15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6h-8zM15 9h4v3h-4zM6 4h4v5H6zM8 4V2M17 9V6M17 17v-5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "VapeKit";

export const VapeKit: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
