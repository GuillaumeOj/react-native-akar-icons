import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<Rect
				width="7"
				height="7"
				x="3"
				y="3"
				stroke={color}
				rx="1"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Rect
				width="7"
				height="7"
				x="3"
				y="14"
				stroke={color}
				rx="1"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Rect
				width="7"
				height="7"
				x="14"
				y="3"
				stroke={color}
				rx="1"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Rect
				width="7"
				height="7"
				x="14"
				y="14"
				stroke={color}
				rx="1"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Grid";

export const Grid: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
