const { optimize } = require("svgo");
const changeCase = require("change-case");
const cheerio = require("cheerio");
const { globSync } = require("glob");
const fs = require("node:fs");
const path = require("node:path");
const prettier = require("prettier");

const ROOT_DIR = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const ASSETS_DIR = path.join(ROOT_DIR, "assets");
const TYPES_DIR = path.join(SRC_DIR, "types");
const TYPES_ICONS_DIR = path.join(TYPES_DIR, "icons");
const ASSETS_SVG_DIR = path.join(ASSETS_DIR, "svg");
const SRC_ICONS_DIR = path.join(SRC_DIR, "icons");

fs.mkdir(TYPES_DIR, () => {});
fs.mkdir(TYPES_ICONS_DIR, () => {});
fs.mkdir(SRC_ICONS_DIR, () => {});

const iconExports = [];
const iconTypeExports = [];

const buildIconsPropsType = async () => {
  const iconHelperTypePath = path.join(TYPES_ICONS_DIR, "helpers-icon.d.ts");
  const output = `import React from "react";
export interface IconProps extends React.ComponentProps<any> {
  color?: string;
  size?: number | string;
}`;
  const prettierConfig = await prettier.resolveConfig(iconHelperTypePath);
  const formatted = await prettier.format(output, {
    ...prettierConfig,
    filepath: iconHelperTypePath,
  });
  fs.writeFileSync(iconHelperTypePath, formatted, { encoding: "utf-8" });
};

const buildIconType = async (componentName) => {
  console.info(">> Icon type");
  const iconTypePath = path.join(TYPES_ICONS_DIR, `${componentName}.d.ts`);
  const output = `import type { NamedExoticComponent } from "react";
import type { IconProps } from "./helpers-icon";
export declare const ${componentName}: NamedExoticComponent<IconProps>;`;

  const prettierConfig = await prettier.resolveConfig(iconTypePath);
  const formatted = await prettier.format(output, {
    ...prettierConfig,
    filepath: iconTypePath,
  });
  fs.writeFileSync(iconTypePath, formatted, { encoding: "utf-8" });
};
const buildIcons = async () => {
  const icons = globSync(`${ASSETS_SVG_DIR}/**.svg`);

  console.info("Processing icons...");
  icons.forEach(async (icon) => {
    // Load SVG
    const svg = fs.readFileSync(icon, { encoding: "utf-8" });
    const id = path.basename(icon, ".svg");
    const outputFileName = `${id}.tsx`;
    const outputLocation = path.join(SRC_ICONS_DIR, outputFileName);
    console.info(`> Processing ${id}...`);

    // Optimize SVG
    console.info(">> Optimize...");
    const optimizedSvg = optimize(svg, {
      path: icon,
      plugins: ["preset-default"],
    });

    // Transform to React Native component
    const $ = cheerio.load(optimizedSvg.data, { xml: true });
    console.info(">> Transform...");
    const svgAttributes = $("svg")[0].attribs;
    delete svgAttributes["xmlns"];
    const attributesOfInterest = {};
    Object.keys(svgAttributes).forEach((key) => {
      if (
        ![
          "height",
          "width",
          "viewBox",
          "fill",
          "stroke-width",
          "stroke-linecap",
          "stroke-linejoin",
        ].includes(key)
      ) {
        attributesOfInterest[key] = svgAttributes[key];
      }
    });

    $("*").each((_, element) => {
      Object.keys(element.attribs).forEach((attribute) => {
        if (attribute.includes("-")) {
          $(element)
            .attr(changeCase.camelCase(attribute), element.attribs[attribute])
            .removeAttr(attribute);
        }
        if (attribute === "stroke") {
          $(element).attr(attribute, "currentColor");
        }
        if (element.name !== "svg") {
          Object.keys(attributesOfInterest).forEach((key) => {
            $(element).attr(
              changeCase.camelCase(key),
              attributesOfInterest[key]
            );
          });
        } else {
          $(element).attr("otherProps", "...");
        }
      });
    });

    const componentName = changeCase.pascalCase(id);
    const output = `import React, { memo } from "react";
import type { NamedExoticComponent } from "react";
import {
  Svg,
  Circle as _Circle,
  ClipPath,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Ponlygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop
} from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon"

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    ${$("svg")
      .toString()
      .replace(/ class=\"[^\"]+\"/g, "")
      .replace(/ version=\"[^\"]+\"/g, "")
      .replace(new RegExp('fill="(?!none)[^"]+"', "g"), "fill={color}")
      .replace(new RegExp('stroke="currentColor"', "g"), "stroke={color}")
      .replace('width="24"', "width={size}")
      .replace('height="24"', "height={size}")
      .replace('otherProps="..."', "{...otherProps}")
      .replace("<svg", "<Svg")
      .replace("</svg", "</Svg")
      .replace(new RegExp("<circle", "g"), "<_Circle")
      .replace(new RegExp("</circle", "g"), "</_Circle")
      .replace(new RegExp("<clipPath", "g"), "<ClipPath")
      .replace(new RegExp("</clipPath", "g"), "</ClipPath")
      .replace(new RegExp("<ellipse", "g"), "<Ellipse")
      .replace(new RegExp("</ellipse", "g"), "</Ellipse")
      .replace(new RegExp("<g", "g"), "<G")
      .replace(new RegExp("</g", "g"), "</G")
      .replace(new RegExp("<linear-gradient", "g"), "<LinearGradient")
      .replace(new RegExp("</linear-gradient", "g"), "</LinearGradient")
      .replace(new RegExp("<radial-gradient", "g"), "<RadialGradient")
      .replace(new RegExp("</radial-gradient", "g"), "</RadialGradient")
      .replace(new RegExp("<path", "g"), "<Path")
      .replace(new RegExp("</path", "g"), "</Path")
      .replace(new RegExp("<line", "g"), "<Line")
      .replace(new RegExp("</line", "g"), "</Line")
      .replace(new RegExp("<polygon", "g"), "<Polygon")
      .replace(new RegExp("</polygon", "g"), "</Polygon")
      .replace(new RegExp("<polyline", "g"), "<Polyline")
      .replace(new RegExp("</polyline", "g"), "</Polyline")
      .replace(new RegExp("<rect", "g"), "<Rect")
      .replace(new RegExp("</rect", "g"), "</Rect")
      .replace(new RegExp("<symbol", "g"), "<Symbol")
      .replace(new RegExp("</symbol", "g"), "</Symbol")
      .replace(new RegExp("<text", "g"), "<_Text")
      .replace(new RegExp("</text", "g"), "</_Text")
      .replace(new RegExp("<use", "g"), "<Use")
      .replace(new RegExp("</use", "g"), "</Use")
      .replace(new RegExp("<defs", "g"), "<Defs")
      .replace(new RegExp("</defs", "g"), "</Defs")
      .replace(new RegExp("<stop", "g"), "<Stop")
      .replace(new RegExp("</stop", "g"), "</Stop")
      .replace(new RegExp("px", "g"), "")}
  )
};

IconComponent.displayName = "${componentName}";


export const ${componentName}: NamedExoticComponent<IconProps> = memo<IconProps>(IconComponent);`;

    const exportLine = `export { ${componentName} } from "./icons/${id}";`;
    iconExports.push(exportLine);
    const exportTypeLine = `export { ${componentName} } from "./icons/${componentName}";`;
    iconTypeExports.push(exportTypeLine);

    await buildIconType(componentName);

    const prettierConfig = await prettier.resolveConfig(outputLocation);
    const formatted = await prettier.format(output, {
      ...prettierConfig,
      filepath: outputLocation,
      // allow to remove unused imports
      organizeImportsSkipDestructiveCodeActions: false,
    });
    fs.writeFileSync(outputLocation, formatted, { encoding: "utf-8" });
  });
};

const exportComponents = async () => {
  console.info("Export components...");
  const indexPath = path.join(SRC_DIR, "index.ts");
  const indexPrettierConfig = await prettier.resolveConfig(indexPath);
  const formattedComponentExports = await prettier.format(
    iconExports.join("\n"),
    {
      ...indexPrettierConfig,
      filepath: indexPath,
    }
  );
  fs.writeFileSync(indexPath, formattedComponentExports, { encoding: "utf-8" });
  console.info("Done.");
};

const exportComponentTypes = async () => {
  console.info("Export components types...");
  iconTypeExports.push(`export { IconProps } from "./icons/helpers-icon";`);
  const indexTypePath = path.join(TYPES_DIR, "index.d.ts");
  const indexPrettierConfig = await prettier.resolveConfig(indexTypePath);
  const formattedTypeExports = await prettier.format(
    iconTypeExports.join("\n"),
    { ...indexPrettierConfig, filepath: indexTypePath }
  );
  fs.writeFileSync(indexTypePath, formattedTypeExports, { encoding: "utf8" });
  console.info("Done.");
};

buildIconsPropsType().then(async () => {
  buildIcons().then(async () => {
    await exportComponents();
    await exportComponentTypes();
  });
});
