import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Matches all HTTPS domains
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;
