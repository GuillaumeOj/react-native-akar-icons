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
				d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2zM14 3h6a2 2 0 0 1 2 2v5h-8zM14 14h8v5a2 2 0 0 1-2 2h-6z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Dashboard";

export const Dashboard: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
