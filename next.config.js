const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
})
module.exports = withNextra({
  basePath: process.env.NODE_ENV === 'development' ? '' : '/mineflayer-guide',
  images: {
    unoptimized: true
  }
})