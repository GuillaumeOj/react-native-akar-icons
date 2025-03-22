import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
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
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M24 0H0v24h24zM2.578 2.578H21.42V21.42H16.67V7.33h-4.751V21.42h-9.34z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconComponent.displayName = "NpmFill";

export const NpmFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
