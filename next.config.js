/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_APP_CLIENT_ID: "Iv1.2b1aa513670c2ba8",
    GITHUB_APP_SECRET_KEY: "4d7f247e56794726caa3ca9a41004e4d7b71f907",
    NEXT_AUTH_SECRET: "mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=",
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
