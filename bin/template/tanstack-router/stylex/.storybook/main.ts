import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";
import stylex from "@stylexjs/unplugin";
import tsconfigPaths from "vite-tsconfig-paths";

const tsconfigPath = fileURLToPath(new URL("../tsconfig.json", import.meta.url));

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
    addons: [],
    framework: { name: "@storybook/react-vite", options: {} },
    async viteFinal(viteConfig) {
        return mergeConfig(viteConfig, {
            plugins: [
                tsconfigPaths({
                    projects: [tsconfigPath],
                    ignoreConfigErrors: true,
                }),
                stylex.vite({ dev: true, runtimeInjection: true }),
            ],
        });
    },
};

export default config;
