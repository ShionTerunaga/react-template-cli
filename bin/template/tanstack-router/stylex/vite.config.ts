import { resolve } from "node:path";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import stylex from "@stylexjs/unplugin";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
    plugins: [
        TanStackRouterVite({ autoCodeSplitting: true }),
        stylex.vite({
            dev: process.env.NODE_ENV === "development",
            runtimeInjection: false,
            useCSSLayers: true,
        }),
        viteReact(),
    ],
    resolve: {
        alias: {
            "@": resolve(import.meta.dirname, "./src"),
        },
    },
});
