import { memo } from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const ProductHuntFill: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <G clipPath="url(#a)">
          <Path
            fill={color}
            d="M15.402 10.2c0 .992-.808 1.8-1.8 1.8H10.2V8.4h3.402c.992 0 1.8.808 1.8 1.8M24 12c0 6.629-5.371 12-12 12S0 18.629 0 12 5.371 0 12 0s12 5.371 12 12m-6.198-1.8c0-2.318-1.883-4.2-4.2-4.2H7.8v12h2.4v-3.6h3.402c2.317 0 4.2-1.882 4.2-4.2"
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

export { ProductHuntFill };
export default ProductHuntFill;
