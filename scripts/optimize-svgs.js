const svgo = require("svgo");
const fs = require("fs");
const path = require("path");

const svgoConfig = {
  plugins: [
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeEditorsNSData",
    "cleanupAttrs",
    "mergeStyles",
    "inlineStyles",
    "minifyStyles",
    "convertStyleToAttrs",
    "cleanupIds",
    "removeUselessDefs",
    "convertPathData",
    "removeEmptyAttrs",
    "removeEmptyText",
    "removeEmptyContainers",
    "removeUnusedNS",
    "sortAttrs",
    "sortDefsChildren",
    "removeTitle",
    "removeDesc",
    "removeDimensions",
    {
      name: "removeAttrs",
      params: {
        attrs: ["data-name", "class"],
      },
    },
  ],
};

const inputDir = path.join(__dirname, "../public/icons/raw");
const outputDir = path.join(__dirname, "../public/icons");

async function optimizeSvgs() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (path.extname(file) === ".svg") {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);

      const svg = fs.readFileSync(inputPath, "utf8");
      const result = await svgo.optimize(svg, {
        path: inputPath,
        ...svgoConfig,
      });

      fs.writeFileSync(outputPath, result.data);
      console.log(`Optimized: ${file}`);
    }
  }
}

optimizeSvgs().catch(console.error);
