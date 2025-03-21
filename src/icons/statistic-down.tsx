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
				d="M3 3v16a2 2 0 0 0 2 2h16"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="5.759"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="m7 9 4 4 4-4 6 6"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="5.759"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M18 15h3v-3"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "StatisticDown";

export const StatisticDown: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
