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
				d="M3 13a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="m3 13 2.914 2.331c1.187.95 2.9.855 3.975-.22v0a2.985 2.985 0 0 1 4.222 0v0a2.985 2.985 0 0 0 3.975.22L21 13"
				strokeLinecap="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M12 6a2 2 0 0 1-2-2c0-.876.677-1.576 1.273-2.217L12 1l.727.783C13.323 2.424 14 3.124 14 4a2 2 0 0 1-2 2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Cake";

export const Cake: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
