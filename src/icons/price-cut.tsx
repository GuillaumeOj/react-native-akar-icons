import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const PriceCut: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M2 7v8a2 2 0 0 0 2 2h1M2 7V5a2 2 0 0 1 2-2h2M2 7a4 4 0 0 0 4-4m0 0h13m-9.236 9A3 3 0 0 1 14 7.764M2 20 20 2m1.22 16.047.549-6.261c.075-.865-.598-1.63-1.504-1.71l-.82-.071m1.776 8.042-.137 1.566c-.076.864-.872 1.501-1.778 1.422l-1.64-.144m3.555-2.844c-1.813-.158-3.405 1.115-3.556 2.844m0 0L7 19.958m4.347-3.477c.409.52.94.785 1.67.849 1.359.119 2.553-.836 2.666-2.133.061-.696-.085-1.269-.551-1.743"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { PriceCut };
export default PriceCut;
