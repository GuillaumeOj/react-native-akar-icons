import React from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const HtmlFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <G fill={color} clipPath="url(#a)">
          <Path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zM9.656 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zM16.346 0h1.083v2.167h1.52v1.07h-2.603z" />
          <Path
            d="M5.046 22.072 3 4.717h18L18.953 22.07 11.99 24zm4.137-9.5-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76-2.374.642h-.002l-2.37-.64-.152-1.697H7.332l.298 3.342 4.36 1.21 4.367-1.21.532-5.964.052-.571z"
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

export { HtmlFill };
export default HtmlFill;
