// This is client side config only - don't put anything in here that shouldn't be public!
// export const endpoint = `http://localhost/api/graphql`;
// export const prodEndpoint = `fill me in when we deploy`;
export const endpoint = `https://sea-lion-app-vvkdr.ondigitalocean.app/api/graphql`;
export const prodEndpoint = `https://sea-lion-app-vvkdr.ondigitalocean.app/api/graphql`;
export const perPage = 4;
export const cors = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://sea-lion-app-vvkdr.ondigitalocean.app/:path*',
      },
    ];
  },
};
