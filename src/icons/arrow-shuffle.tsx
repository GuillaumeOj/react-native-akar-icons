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
				d="M2 19h3.908a2 2 0 0 0 1.682-.919L11.5 12l3.91-6.082A2 2 0 0 1 17.092 5H22m0 14h-4.908a2 2 0 0 1-1.682-.919L13.429 15M2 5h3.908a2 2 0 0 1 1.682.918L9.571 9"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="m19 2 3 3-3 3M19 16l3 3-3 3"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "ArrowShuffle";

export const ArrowShuffle: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
