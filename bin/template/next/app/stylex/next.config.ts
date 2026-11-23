import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL("https://ik.imagekit.io/**"),
            new URL("https://images.dog.ceo/**"),
            new URL("https://raw.githubusercontent.com/PokeAPI/sprites/**")
        ]
    },
    reactCompiler: true
};

export default nextConfig;
