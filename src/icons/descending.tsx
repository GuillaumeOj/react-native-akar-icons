import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<Path
				stroke={color}
				d="M6 21V3m0 18 3-3.333M6 21l-3-3.333"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M14 3h8l-1 4h-7zM14 10h6l-1 4h-5zM14 17h4l-1 4h-3z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="5.759"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Descending";

export const Descending: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
