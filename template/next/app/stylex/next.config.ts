import type { NextConfig } from "next";
import stylex from "@stylexjs/unplugin";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL("https://ik.imagekit.io/**"),
            new URL("https://images.dog.ceo/**"),
            new URL("https://raw.githubusercontent.com/PokeAPI/sprites/**")
        ]
    },
    reactCompiler: true,
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
