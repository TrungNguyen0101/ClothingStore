/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
      };
    }

    return config;
  },
  images: {
    domains: [
      'fakestoreapi.com',
      'thegmenstore-dev.s3.ap-southeast-1.amazonaws.com',
    ],
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         compress: {
  //           drop_console: true, // Loại bỏ các lệnh console.log trong quá trình minify
  //         },
  //       },
  //     }),
  //   ],
  // },
  // experimental: {
  //   modern: true,
  // },
};

module.exports = nextConfig;
