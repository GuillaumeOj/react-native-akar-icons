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
				d="M9 3v18M9 3l4 4M9 3 5 7M16 10l4 4-4 4"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path stroke={color} d="M9 21a7 7 0 0 1 7-7h4" strokeWidth="2" />
		</Svg>
	);
};

IconComponent.displayName = "ForkRight";

export const ForkRight: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
