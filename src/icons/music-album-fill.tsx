import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const MusicAlbumFill = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        fill={color}
        d="M1 5c0-2.21 1.792-4 4.002-4h13.996C21.208 1 23 2.79 23 5v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm19 7a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
});

export { MusicAlbumFill };
export default MusicAlbumFill;
