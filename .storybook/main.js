module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../projects/demo-ex/src/**/*.stories.ts",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/ddon-knobs"
  ],
  "core": {
    "builder": "webpack5"
  }
}