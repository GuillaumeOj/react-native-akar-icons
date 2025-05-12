import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const ArrowForwardThickFill: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M14.676 1.054a1 1 0 0 1 1.113.332l7 9a1 1 0 0 1 0 1.228l-7 9A1 1 0 0 1 14 20v-3.99c-5.379.112-7.963 1.133-9.261 2.243-1.234 1.055-1.46 2.296-1.695 3.596l-.061.335a1 1 0 0 1-1.981-.122c-.172-2.748.086-6.73 2.027-10.061C4.913 8.768 8.305 6.282 14 6.022V2a1 1 0 0 1 .675-.946"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { ArrowForwardThickFill };
export default ArrowForwardThickFill;
