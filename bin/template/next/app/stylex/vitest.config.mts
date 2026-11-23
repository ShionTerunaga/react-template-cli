import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import stylex from "@stylexjs/unplugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        tsconfigPaths({
            projects: ["./tsconfig.json"],
            ignoreConfigErrors: true
        }),
        stylex.vite({ dev: true, runtimeInjection: true }),
        react()
    ],
    test: {
        environment: "jsdom",
        coverage: { provider: "v8" }
    }
});
