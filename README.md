# akar-icons-react-native

This is a library compatible with React Native of the Akar Icons library. Please explore all the icons at [akaricons.com](https://akaricons.com).

**This author of this package, is not the author of the Ankar Icons library. For any request of new icons, please visit Ankar Icons original [repository](https://github.com/artcoholic/akar-icons-app/issues).

## Get Started

### 1. Installation

Install with npm:

```shell
npm install --save react-native-akar-icons
```

### 2. Usage

Import the icons you need into your ReactNative project and declare them in your render method:

```jsx
import { ArrowRight, Star, LinkOut } from "react-native-akar-icons";

const MyComponent = () => {
  return (
    <>
      <ArrowRight />
      <Star />
      <LinkOut />
    </>
  );
};

export default MyComponent;
```

Icons can be configured with inline props including inline `style` objects:

```jsx
<Star color="yellow" size={32} strokeWidth={3} style={{ display: "block" }} />
```

| Prop          | Description                                                                                  | Default        |
| ------------- | -------------------------------------------------------------------------------------------- | -------------- |
| `color`       | Set the icon color                                                                           | `currentColor` |
| `size`        | Set the width and height of the svg icon                                                     | `24`           |
| `strokeWidth` | Set the stroke width of the icon                                                             | `2`            |
| `style`       | Add [inline styles](https://facebook.github.io/react/tips/inline-styles.html) to the element | `{}`           |

You can also import the whole icon library like this:

```jsx
import * as Icon from "react-native-akar-icons";

const MyComponent = () => {
  return <Icon.ArrowRight />;
};

export default MyComponent;
```

Explore all the icons at [akaricons.com](https://akaricons.com).

## Related Projects

- [akar-icons-app](https://github.com/artcoholic/akar-icons-app) - Homepage repo of Akar icons.
- [akar-icons](https://github.com/artcoholic/akar-icons) - Akar icons as React components.
- [akar-icons-fonts](https://github.com/artcoholic/akar-icons-fonts) - Akar icons as icon fonts.
- [akar-icons-web-components](https://github.com/awmleer/akar-icons-web-components) - Akar icons as web components, fully customizable and use anywhere.
- [akar-icons-svelte](https://github.com/WilliamVenner/akar-icons-svelte) - Akar icons as Svelte components.
- [blade-akar-icons](https://github.com/codeat3/blade-akar-icons) - A package to easily make use of Akar Icons in your Laravel Blade views.
- [akar_icons_flutter](https://github.com/alann-maulana/akar_icons_flutter) - Akar icons package for Flutter.

## Author

GuillaumeOj for Tasta-app ([Tasta-app](https://github.com/Tasta-app))

## Contributors

Arturo Wibawa ([@agwibawa](https://twitter.com/agwibawa)) (author of of the [akar-icons](https://github.com/artcoholic/akar-icons))

## License

[MIT License](./LICENSE), Copyright © 2020-present Arturo Wibawa, 2025 GuillaumeOj
