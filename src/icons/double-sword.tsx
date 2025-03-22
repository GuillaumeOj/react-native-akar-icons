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
        d="M2 19.2 3.8 21m.9-7.2.9 3.6m0 0 3.6.9m-3.6-.9-2.7 2.7M16.4 3.9l-9 9 .45 2.25 2.25.45 9-9L20 3z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M22 19.2 20.2 21m-.9-7.2-.9 3.6m0 0 2.7 2.7m-2.7-2.7-1.8.45-1.8.45M9.3 11 4.9 6.6 4 3l3.6.9L12 8.3m.1 5.5 1.8 1.8 2.25-.45.45-2.25-1.8-1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "DoubleSword";

export const DoubleSword: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
