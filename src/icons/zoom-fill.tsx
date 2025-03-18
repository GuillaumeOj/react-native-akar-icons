import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12M6 16.2h9V9.6a1.8 1.8 0 0 0-1.8-1.8h-9v6.6A1.8 1.8 0 0 0 6 16.2m10.2-2.4 3.6 2.4V7.8l-3.6 2.4z"
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

IconComponent.displayName = "ZoomFill";

export const ZoomFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
