import type { NextConfig } from "next";
import stylex from "@stylexjs/unplugin";

const nextConfig: NextConfig = {
    reactCompiler: true,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            new URL("https://ik.imagekit.io/**"),
            new URL("https://raw.githubusercontent.com/PokeAPI/sprites/**")
        ]
    },
    webpack(config, { dev }) {
        config.plugins.push(
            stylex.webpack({
                dev,
                runtimeInjection: false,
                useCSSLayers: true
            })
        );
        return config;
    }
};

export default nextConfig;
