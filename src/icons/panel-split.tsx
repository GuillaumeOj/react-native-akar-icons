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
				height="18"
				x="2"
				y="3"
				stroke={color}
				rx="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path stroke={color} d="M9 3v18M22 12H9" strokeWidth="2" />
		</Svg>
	);
};

IconComponent.displayName = "PanelSplit";

export const PanelSplit: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
