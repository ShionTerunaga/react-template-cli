import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            new URL("https://ik.imagekit.io/**"),
            new URL("https://raw.githubusercontent.com/PokeAPI/sprites/**")
        ]
    }
};

export default nextConfig;
