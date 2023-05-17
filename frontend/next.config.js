module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  define: { __DEV__: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },
  compiler: { styledComponents: true },
};
