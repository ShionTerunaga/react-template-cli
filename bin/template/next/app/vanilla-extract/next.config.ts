import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin({
    unstable_turbopack: {
        mode: "auto"
    }
});

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL("https://ik.imagekit.io/**"),
            new URL("https://images.dog.ceo/**"),
            new URL("https://raw.githubusercontent.com/PokeAPI/sprites/**")
        ]
    },
    /* config options here */
    reactCompiler: true
};

export default withVanillaExtract(nextConfig);
