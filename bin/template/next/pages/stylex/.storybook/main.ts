import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs";
import stylex from "@stylexjs/unplugin";

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [],
    framework: { name: "@storybook/nextjs", options: {} },
    staticDirs: ["../public"],
    webpackFinal: async (webpackConfig) => {
        webpackConfig.resolve ??= {};
        webpackConfig.resolve.alias = {
            ...(webpackConfig.resolve.alias as Record<string, string>),
            "@": path.resolve(currentDir, "../src")
        };
        webpackConfig.plugins ??= [];
        webpackConfig.plugins.push(
            stylex.webpack({ dev: true, runtimeInjection: true })
        );
        return webpackConfig;
    }
};

export default config;
