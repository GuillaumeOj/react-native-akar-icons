import React from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const JavascriptFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <G clipPath="url(#a)">
          <Path
            fill={color}
            d="M0 0h24v24H0zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306 2.142 0 3.737-1.112 3.737-3.143 0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37 0-.547.42-.966 1.08-.966.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806-2.014 0-3.303 1.288-3.303 2.98 0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497 0 .646-.597 1.113-1.531 1.113m-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06 1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416"
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

export { JavascriptFill };
export default JavascriptFill;
