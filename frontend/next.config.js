module.exports = {
  reactStrictMode: false,
  swcMinify: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },
  compiler: { styledComponents: true },
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
};
