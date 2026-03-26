/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.watchOptions = {
//         poll: 1000,
//         aggregateTimeout: 300,
//       }
//     }
//     return config
//   },
//   // Turbopack ke liye specific settings agar error persist kare
// }
// module.exports = nextConfig