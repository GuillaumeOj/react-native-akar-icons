import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<Rect
				width="20"
				height="16"
				x="2"
				y="4"
				stroke={color}
				rx="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M12 10.016A2.8 2.8 0 0 0 9.857 9C8.28 9 7 10.343 7 12s1.28 3 2.857 3c.854 0 1.62-.393 2.143-1.016M17 12c0 1.657-1.28 3-2.857 3s-2.857-1.343-2.857-3 1.279-3 2.857-3S17 10.343 17 12"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "CreditCard";

export const CreditCard: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
