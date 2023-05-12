// This is client side config only - don't put anything in here that shouldn't be public!
// export const endpoint = `http://localhost:3000/api/graphql`;
// export const prodEndpoint = `fill me in when we deploy`;
export const endpoint = `https://api.maxwilets.io/api/graphql`;
export const prodEndpoint = `https://api.maxwilets.io/api/graphql`;
export const perPage = 4;
export const cors = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://maxwilets.io/:path*',
      },
    ];
  },
};
