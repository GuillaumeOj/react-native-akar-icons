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
				d="M12 4v14"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M19 7.674v-.657a4 4 0 0 0-2.901-3.846l-2.824-.807A1 1 0 0 0 12 3.326V7l5.725 1.636A1 1 0 0 0 19 7.674Z"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M12 18a3 3 0 1 1-6 0c0-1.657 1.343-2 3-2s3 .343 3 2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "MusicNote";

export const MusicNote: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
