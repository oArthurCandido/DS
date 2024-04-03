import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/lib/**/*.stories.@(js|jsx|ts|tsx)"

    
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  webpackFinal: async (config, { configType }) => {
    if (!config.resolve) {
      return config;
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };

    return config;
  },
};
export default config;
