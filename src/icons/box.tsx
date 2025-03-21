import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<Rect
				width="18"
				height="18"
				x="3"
				y="3"
				stroke={color}
				rx="4"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Box";

export const Box: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
