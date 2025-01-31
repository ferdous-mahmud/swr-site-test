const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "bn-BD"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ['user-images.githubusercontent.com'],
  },
});
