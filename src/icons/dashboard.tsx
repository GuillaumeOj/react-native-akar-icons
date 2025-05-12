import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Dashboard: IconType = memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2zM14 3h6a2 2 0 0 1 2 2v5h-8zM14 14h8v5a2 2 0 0 1-2 2h-6z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Dashboard };
export default Dashboard;
