const { optimize } = require("svgo");
const changeCase = require("change-case");
const cheerio = require("cheerio");
const { globSync } = require("glob");
const fs = require("node:fs");
const path = require("node:path");

const ROOT_DIR = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const ASSETS_DIR = path.join(ROOT_DIR, "assets");
const TYPES_DIR = path.join(SRC_DIR, "types");
const ASSETS_SVG_DIR = path.join(ASSETS_DIR, "svg");
const ICONS_DIR = path.join(SRC_DIR, "icons");

if (!fs.existsSync(TYPES_DIR)) {
  fs.mkdirSync(TYPES_DIR, () => {}, { recursive: true });
}
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, () => {}, { recursive: true });
}

const iconExports = [
  'export type { IconProps, IconType } from "./types/icons"',
];

const buildIconsPropsType = async () => {
  const iconHelperTypePath = path.join(TYPES_DIR, "icons.d.ts");
  const output = `import type React from "react";
import type { ColorValue } from "react-native";
import type { SvgProps } from "react-native-svg";

export interface IconProps extends SvgProps {
  color?: ColorValue;
  size?: number;
  strokeWidth?: number;
}

export type IconType = React.MemoExoticComponent<({ color, size, strokeWidth, ...rest }: IconProps) => React.JSX.Element>`;
  fs.writeFileSync(iconHelperTypePath, output, { encoding: "utf-8" });
};

const buildIcons = async () => {
  const icons = globSync(`${ASSETS_SVG_DIR}/**.svg`);

  console.info("Processing icons...");
  for (const icon of icons) {
    // Load SVG
    const svg = fs.readFileSync(icon, { encoding: "utf-8" });
    const id = path.basename(icon, ".svg");
    const outputFileName = `${id}.tsx`;
    const outputLocation = path.join(ICONS_DIR, outputFileName);
    console.info(`> Processing ${id}...`);

    // Optimize SVG
    console.info(">> Optimize...");
    const optimizedSvg = optimize(svg, {
      path: icon,
      plugins: [
        {
          name: "preset-default",
          params: { overrides: { removeViewBox: false } },
        },
      ],
    });

    // Transform to React Native component
    const $ = cheerio.load(optimizedSvg.data, { xml: true });
    console.info(">> Transform...");
    const svgAttributes = $("svg")[0].attribs;
    svgAttributes.xmlns = undefined;
    const attributesOfInterest = {};
    for (const key of Object.keys(svgAttributes)) {
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
    }

    $("*").each((_, element) => {
      for (const attribute of Object.keys(element.attribs)) {
        if (attribute.includes("-")) {
          $(element)
            .attr(changeCase.camelCase(attribute), element.attribs[attribute])
            .removeAttr(attribute);
        }
        if (attribute === "stroke") {
          $(element).attr(attribute, "currentColor");
        }
        if (element.name !== "svg") {
          for (const key of Object.keys(attributesOfInterest)) {
            $(element).attr(
              changeCase.camelCase(key),
              attributesOfInterest[key],
            );
          }
        } else {
          $(element).attr("rest", "...");
        }
      }
    });

    const componentName = changeCase.pascalCase(id);
    const svgString = $("svg")
      .toString()
      .replace(/ class="[^"]+"/g, "")
      .replace(/ version="[^"]+"/g, "")
      .replace(/fill="(?!none)[^"]+"/g, "fill={color}")
      .replace(/strokeWidth="(?!none)[^"]+"/g, "strokeWidth={strokeWidth}")
      .replace(/stroke="currentColor"/g, "stroke={color}")
      .replace(/xmlns=""/g, "")
      .replace(/width="24"/g, "width={size}")
      .replace(/height="24"/g, "height={size}")
      .replace(/rest="..."/g, "{...rest}")
      .replace(/<svg/g, "<Svg")
      .replace(/<\/svg>/g, "</Svg>")
      .replace(/<circle/g, "<_Circle")
      .replace(/<\/circle>/g, "</_Circle>")
      .replace(/<clipPath/g, "<ClipPath")
      .replace(/<\/clipPath>/g, "</ClipPath>")
      .replace(/<ellipse/g, "<Ellipse")
      .replace(/<\/ellipse>/g, "</Ellipse>")
      .replace(/<g/g, "<G")
      .replace(/<\/g>/g, "</G>")
      .replace(/<linearGradient/g, "<LinearGradient")
      .replace(/<\/linearGradient>/g, "</LinearGradient>")
      .replace(/<radialGradient/g, "<RadialGradient")
      .replace(/<\/radialGradient>/g, "</RadialGradient>")
      .replace(/<path/g, "<Path")
      .replace(/<\/path>/g, "</Path>")
      .replace(/<line/g, "<Line")
      .replace(/<\/line>/g, "</Line>")
      .replace(/<polygon/g, "<Polygon")
      .replace(/<\/polygon>/g, "</Polygon>")
      .replace(/<polyline/g, "<Polyline")
      .replace(/<\/polyline>/g, "</Polyline>")
      .replace(/<rect/g, "<Rect")
      .replace(/<\/rect>/g, "</Rect>")
      .replace(/<symbol/g, "<_Symbol")
      .replace(/<\/symbol>/g, "</_Symbol>")
      .replace(/<text/g, "<_Text")
      .replace(/<\/text>/g, "</_Text>")
      .replace(/<use/g, "<Use")
      .replace(/<\/use>/g, "</Use>")
      .replace(/<defs/g, "<Defs")
      .replace(/<\/defs>/g, "</Defs>")
      .replace(/<stop/g, "<_Stop")
      .replace(/<\/stop>/g, "</_Stop>")
      .replace(/px/g, "");

    const output = `import React, { memo } from "react";
import React from "react";
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
  Polygon,
  Polyline,
  Rect,
  Symbol as _Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop as _Stop
} from "react-native-svg";
import type { IconProps, IconType } from "../types/icons"

const ${componentName}: IconType = React.memo(({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
  return (${svgString});
});


export { ${componentName} };
export default ${componentName}`;

    const exportLine = `export { default as ${componentName} } from "./icons/${id}";`;
    iconExports.push(exportLine);

    fs.writeFileSync(outputLocation, output, { encoding: "utf-8" });
  }
};

const exportComponents = async () => {
  console.info("Export components...");
  const indexPath = path.join(SRC_DIR, "index.ts");
  fs.writeFileSync(indexPath, iconExports.join("\n"), { encoding: "utf-8" });
  console.info("Done.");
};

buildIconsPropsType().then(async () => {
  buildIcons().then(async () => {
    await exportComponents();
    require("node:child_process").execSync(
      "bunx biome check --write --unsafe src",
    );
  });
});
