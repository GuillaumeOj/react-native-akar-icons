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
				d="m12 21 9-7h-4.99L16 3H8v11H3z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "ArrowDownThick";

export const ArrowDownThick: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
