import React from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const ReduxFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <G clipPath="url(#a)">
          <Path
            fill={color}
            d="M16.63 16.563c.885-.092 1.557-.863 1.527-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062c-.947.03-1.68.832-1.65 1.788.032.463.215.863.49 1.14-1.039 2.067-2.627 3.577-5.01 4.841-1.618.864-3.298 1.172-4.977.956-1.375-.185-2.444-.802-3.116-1.819-.977-1.51-1.068-3.145-.244-4.779.58-1.171 1.497-2.035 2.077-2.466-.122-.401-.305-1.08-.397-1.573C-.871 14.436-.412 18.814.93 20.88c1.008 1.542 3.054 2.498 5.315 2.498.61 0 1.221-.062 1.832-.216 3.91-.77 6.872-3.114 8.552-6.598m5.375-3.823c-2.321-2.744-5.742-4.255-9.651-4.255h-.489a1.68 1.68 0 0 0-1.496-.925h-.062c-.946.031-1.68.833-1.649 1.789.03.925.794 1.664 1.71 1.664h.062a1.72 1.72 0 0 0 1.496-1.048h.55c2.321 0 4.52.678 6.505 2.004 1.527 1.018 2.627 2.343 3.237 3.947.52 1.294.49 2.558-.06 3.638-.856 1.634-2.291 2.528-4.185 2.528-1.221 0-2.382-.37-2.993-.648a18 18 0 0 1-1.374 1.11c1.313.617 2.657.956 3.94.956 2.932 0 5.1-1.634 5.925-3.268.885-1.788.824-4.871-1.466-7.492M6.49 17.087c.03.925.794 1.665 1.71 1.665h.061c.947-.03 1.68-.832 1.65-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062c-.061 0-.153 0-.214.03-1.252-2.096-1.771-4.377-1.588-6.844.122-1.85.733-3.453 1.802-4.779.886-1.14 2.596-1.695 3.757-1.726 3.237-.062 4.611 4.008 4.703 5.642.397.092 1.069.308 1.527.462C17.759 3.09 14.706.5 11.773.5 9.025.5 6.49 2.504 5.482 5.464c-1.405 3.946-.489 7.738 1.222 10.729-.153.216-.245.555-.214.894"
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

export { ReduxFill };
export default ReduxFill;
