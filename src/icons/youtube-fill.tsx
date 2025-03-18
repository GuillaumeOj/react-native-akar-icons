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
          d="M23.5 6.507a2.8 2.8 0 0 0-.766-1.27 3.05 3.05 0 0 0-1.338-.742C19.518 4 11.994 4 11.994 4a77 77 0 0 0-9.39.47 3.16 3.16 0 0 0-1.338.76c-.37.356-.638.795-.778 1.276A29 29 0 0 0 0 12c-.012 1.841.151 3.68.488 5.494.137.479.404.916.775 1.269s.833.608 1.341.743c1.903.494 9.39.494 9.39.494a77 77 0 0 0 9.402-.47 3.05 3.05 0 0 0 1.338-.742c.37-.353.633-.792.765-1.27A28.4 28.4 0 0 0 24 12.023a26.6 26.6 0 0 0-.5-5.517M9.602 15.424V8.577l6.26 3.424z"
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

IconComponent.displayName = "YoutubeFill";

export const YoutubeFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
