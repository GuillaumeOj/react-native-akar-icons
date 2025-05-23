import React from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const FigmaFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <G clipPath="url(#a)">
          <Path
            fill={color}
            d="M8.415 0C5.968 0 4 2.053 4 4.568c0 1.529.728 2.887 1.847 3.716A4.61 4.61 0 0 0 4 12c0 1.53.728 2.887 1.847 3.716A4.61 4.61 0 0 0 4 19.432C4 21.947 5.968 24 8.415 24s4.415-2.053 4.415-4.568V15.57a4.3 4.3 0 0 0 2.755.999C18.032 16.568 20 14.515 20 12c0-1.53-.727-2.887-1.847-3.716A4.61 4.61 0 0 0 20 4.568C20 2.053 18.032 0 15.585 0zM5.659 4.568c0-1.591 1.242-2.865 2.756-2.865h2.755v5.73H8.415c-1.514 0-2.756-1.275-2.756-2.865m9.926 2.864H12.83v-5.73h2.755c1.515 0 2.756 1.275 2.756 2.866 0 1.59-1.241 2.864-2.756 2.864M5.66 12c0-1.59 1.242-2.865 2.756-2.865h2.755v5.73H8.415C6.9 14.865 5.659 13.59 5.659 12m7.17 0c0-1.59 1.242-2.865 2.756-2.865 1.515 0 2.756 1.274 2.756 2.865 0 1.59-1.241 2.865-2.756 2.865S12.83 13.59 12.83 12m-7.17 7.432c0-1.59 1.242-2.864 2.756-2.864h2.755v2.864c0 1.591-1.24 2.865-2.755 2.865s-2.756-1.274-2.756-2.865"
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
  },
);

export { FigmaFill };
export default FigmaFill;
