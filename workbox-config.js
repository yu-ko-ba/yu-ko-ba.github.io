module.exports = {
  globDirectory: "public/",
  globPatterns: [
    "**/*.{ico,json,png,js,svg}",
  ],
  swDest: "public/sw.js",
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/,
  ],
  runtimeCaching: [{
    urlPattern: /.+/,
    handler: "NetworkFirst",
  }],
};
