import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const YelpFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="m4.98 11.264 4.701 2.278a1.075 1.075 0 0 1 .6 1.074 1.07 1.07 0 0 1-.81.927L4.393 16.8a1.09 1.09 0 0 1-1.187-.492 1.1 1.1 0 0 1-.146-.429 9.16 9.16 0 0 1 .424-3.996 1.07 1.07 0 0 1 .606-.645 1.09 1.09 0 0 1 .888.026M6.862 20.879l3.5-3.861a1.08 1.08 0 0 1 1.205-.277 1.08 1.08 0 0 1 .673 1.03l-.183 5.195a1.07 1.07 0 0 1-.396.793 1.08 1.08 0 0 1-.861.226 9.4 9.4 0 0 1-3.748-1.506 1.07 1.07 0 0 1-.46-.758 1.07 1.07 0 0 1 .27-.842M15.16 15.74l4.975 1.606a1.08 1.08 0 0 1 .657.596 1.06 1.06 0 0 1-.017.884 9.3 9.3 0 0 1-2.487 3.166 1.082 1.082 0 0 1-1.602-.258l-2.773-4.408a1.065 1.065 0 0 1 .065-1.226 1.08 1.08 0 0 1 1.182-.36M20.219 12.588l-5.029 1.433a1.085 1.085 0 0 1-1.169-.4A1.065 1.065 0 0 1 14 12.393l2.926-4.308a1.08 1.08 0 0 1 .755-.464 1.09 1.09 0 0 1 .85.257 9.2 9.2 0 0 1 2.379 3.25 1.07 1.07 0 0 1-.691 1.46M8.469.468a15 15 0 0 0-2.585.946 1.08 1.08 0 0 0-.564.65 1.06 1.06 0 0 0 .097.851l4.915 8.456a1.076 1.076 0 0 0 1.212.499 1.066 1.066 0 0 0 .799-1.034V1.072A1.065 1.065 0 0 0 11.622.06a1.1 1.1 0 0 0-.437-.057c-.918.072-1.826.228-2.715.465"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { YelpFill };
export default YelpFill;
